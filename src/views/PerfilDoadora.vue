<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { buscarPerfilDoadora } from '@/services/doadoraService'

const route = useRoute()
const MAX_CICLOS = 2147483647
const doadora = ref(null)
const carregando = ref(true)
const erroCarregamento = ref('')
const erroAcao = ref('')
const sucessoAcao = ref('')
const acaoEmAndamento = ref('')
const mostrarDialogRecusa = ref(false)
const mostrarDialogEncerramento = ref(false)
const documentoSelecionado = ref(null)
const motivoRecusa = ref('')
const jornadaEncerrada = ref(false)
const quantidadeCiclosInput = ref('')
const erroCiclos = ref('')
const mensagemCiclos = ref('')

watch(
    () => route.params.id,
    async (id) => {
        carregando.value = true
        erroCarregamento.value = ''
        erroAcao.value = ''
        sucessoAcao.value = ''
        jornadaEncerrada.value = false
        try {
            const perfil = await buscarPerfilDoadora(id)
            doadora.value = perfil ? structuredClone(perfil) : null
            const etapaColeta = perfil?.jornada?.etapas_feitas?.find((etapa) =>
                etapa.titulo?.toLocaleLowerCase('pt-BR').includes('coleta')
            )
            quantidadeCiclosInput.value = String(etapaColeta?.ciclo_total ?? etapaColeta?.ciclo ?? '')
        } catch (error) {
            doadora.value = null
            erroCarregamento.value = error instanceof Error
                ? error.message
                : 'Não foi possível carregar o perfil da doadora.'
        } finally {
            carregando.value = false
        }
    },
    { immediate: true }
)

const jornada = computed(() => doadora.value?.jornada)
const etapas = computed(() => {
    if (!jornada.value) return []

    return [
        ...(jornada.value.etapas_feitas ?? []),
        ...(jornada.value.etapas_faltantes ?? [])
    ].sort((a, b) => a.ordem - b.ordem)
})

const progresso = computed(() => {
    if (!jornada.value?.total_etapas) return 0

    return Math.min(
        100,
        Math.round((jornada.value.total_etapas_feitas / jornada.value.total_etapas) * 100)
    )
})

const etapasConcluidas = computed(() =>
    (jornada.value?.etapas_feitas ?? []).filter((etapa) => etapa.data_conclusao).length
)

const iniciais = computed(() =>
    doadora.value?.nome
        .split(' ')
        .map((parte) => parte[0])
        .slice(0, 2)
        .join('')
        .toUpperCase() ?? ''
)

const localizacao = computed(() => {
    const { cidade, estado } = doadora.value?.endereco ?? {}
    return [cidade, estado].filter(Boolean).join(', ')
})

function dataFormatada(data) {
    if (!data) return ''

    const [ano, mes, dia] = data.split('-').map(Number)
    return new Intl.DateTimeFormat('pt-BR').format(new Date(ano, mes - 1, dia))
}

function descricaoEtapa(etapa) {
    const descricoes = {
        'Conheça a doação': 'O que é e por que a doação de leite humano é importante.',
        Orientações: 'Higiene, coleta, armazenamento, transporte e entrega.',
        'Documento de início': 'Triagem informativa sobre o processo.',
        Agendamento: 'Agendamento da doação na instituição.',
        Coleta: 'Acompanhamento dos ciclos de coleta.'
    }

    return etapa.descricao ?? descricoes[etapa.titulo] ?? ''
}

function statusEtapa(etapa) {
    if (etapa.agendamentos?.some((agendamento) => agendamento.status)) {
        return etapa.agendamentos.find((agendamento) => agendamento.status)?.status
    }
    if (etapa.data_conclusao) return 'Concluída'

    return 'Em andamento'
}

function statusDocumento(documento) {
    const status = String(documento.status ?? '').toLocaleLowerCase('pt-BR')
    if (documento.id_status_documento === 3 || documento.motivo_recusa || status.includes('recus')) return 'Recusado'
    if (
        documento.id_status_documento === 2 ||
        documento.is_aprovado === true ||
        status.includes('aprov') ||
        status.includes('aceit')
    ) return 'Aceito'
    return 'Pendente'
}

function linkDocumento(documento) {
    const valor = documento.url ?? documento.link ?? documento.documento
    if (typeof valor !== 'string' || !valor.trim()) return ''

    const link = valor.trim()
    const protocolo = link.match(/^([a-z][a-z\d+.-]*):/i)?.[1]?.toLowerCase()
    if (protocolo && !['http', 'https'].includes(protocolo)) return ''

    return link
}

function nomeArquivo(documento) {
    const link = linkDocumento(documento)
    if (!link) return 'documento'

    try {
        return decodeURIComponent(link.split(/[?#]/)[0].split('/').pop()) || 'documento'
    } catch {
        return link.split(/[?#]/)[0].split('/').pop() || 'documento'
    }
}

function executarAcao(chave, acao) {
    acaoEmAndamento.value = chave
    erroAcao.value = ''
    sucessoAcao.value = ''
    try {
        acao()
    } catch (error) {
        erroAcao.value = error instanceof Error ? error.message : 'Não foi possível concluir a ação.'
    } finally {
        acaoEmAndamento.value = ''
    }
}

function atualizarStatusDocumento(documento, status) {
    if (status === 'Recusado') {
        documentoSelecionado.value = documento
        motivoRecusa.value = ''
        mostrarDialogRecusa.value = true
        return
    }

    executarAcao(`documento-${documento.id}`, () => {
        documento.status = 'Aceito'
        documento.id_status_documento = 2
        documento.is_aprovado = true
        documento.motivo_recusa = null
        sucessoAcao.value = 'Documento aceito.'
    })
}

function confirmarRecusaDocumento() {
    const motivo = motivoRecusa.value.trim()
    if (!motivo) {
        erroAcao.value = 'Informe o motivo da recusa do documento.'
        return
    }

    executarAcao(`documento-${documentoSelecionado.value.id}`, () => {
        documentoSelecionado.value.status = 'Recusado'
        documentoSelecionado.value.id_status_documento = 3
        documentoSelecionado.value.motivo_recusa = motivo
        documentoSelecionado.value.is_aprovado = false
        mostrarDialogRecusa.value = false
        documentoSelecionado.value = null
        motivoRecusa.value = ''
        sucessoAcao.value = 'Documento recusado.'
    })
}

function atualizarStatusAgendamento(agendamento, status) {
    executarAcao(`agendamento-${agendamento.id}`, () => {
        agendamento.status = status
        sucessoAcao.value = `Agendamento ${status.toLocaleLowerCase('pt-BR')}.`
    })
}

function definirQuantidadeCiclos(etapa) {
    const quantidade = Number(quantidadeCiclosInput.value)
    if (!Number.isSafeInteger(quantidade) || quantidade < 1 || quantidade > MAX_CICLOS) {
        erroCiclos.value = `Informe uma quantidade entre 1 e ${MAX_CICLOS}.`
        mensagemCiclos.value = ''
        return
    }

    if (etapa.data_conclusao || Number(etapa.ciclo) < Number(etapa.ciclo_total)) {
        erroCiclos.value = 'A quantidade só pode ser definida antes da conclusão do primeiro ciclo.'
        mensagemCiclos.value = ''
        return
    }

    executarAcao(`ciclos-${etapa.id_jornada_doacao}`, () => {
        etapa.ciclo = quantidade
        etapa.ciclo_total = quantidade
        erroCiclos.value = ''
        quantidadeCiclosInput.value = String(quantidade)
        mensagemCiclos.value = 'Quantidade de ciclos atualizada.'
    })
}

function registrarConclusaoCiclo(etapa) {
    const ciclosRestantes = Number(etapa.ciclo)
    if (!Number.isInteger(ciclosRestantes) || ciclosRestantes < 1) return

    etapa.ciclo = ciclosRestantes - 1
    etapa.encerrado = etapa.ciclo === 0
    etapa.data_conclusao = etapa.encerrado ? new Date().toISOString().slice(0, 10) : null
}

function concluirCicloAtual(etapa) {
    if (etapa.encerrado || !Number(etapa.ciclo)) return

    executarAcao(`concluir-ciclo-${etapa.id_jornada_doacao}`, () => {
        registrarConclusaoCiclo(etapa)
        sucessoAcao.value = etapa.encerrado ? 'Todos os ciclos foram concluídos.' : 'Ciclo concluído.'
    })
}

function encerrarTodosCiclos(etapa) {
    if (etapa.encerrado || !Number(etapa.ciclo)) return

    executarAcao(`encerrar-ciclos-${etapa.id_jornada_doacao}`, () => {
        while (Number(etapa.ciclo) > 0 && !etapa.encerrado) {
            registrarConclusaoCiclo(etapa)
        }
        sucessoAcao.value = 'Todos os ciclos foram encerrados.'
    })
}

function solicitarEncerramentoJornada() {
    mostrarDialogEncerramento.value = true
}

function confirmarEncerramentoJornada() {
    const etapaComVinculo = etapas.value.find((etapa) => etapa.id_jornada_doacao)
    if (!etapaComVinculo) {
        erroAcao.value = 'Não foi encontrado um vínculo ativo para encerrar esta jornada.'
        mostrarDialogEncerramento.value = false
        return
    }

    executarAcao(`encerrar-jornada-${doadora.value.id}`, () => {
        mostrarDialogEncerramento.value = false
        jornadaEncerrada.value = true
        sucessoAcao.value = 'A jornada da doadora foi encerrada.'
    })
}

function iconeEtapa(etapa) {
    if (etapa.titulo === 'Agendamento') return 'calendario'
    if (etapa.titulo === 'Coleta') return 'coleta'
    if (etapa.titulo === 'Documento de início') return 'documento'
    if (etapa.titulo === 'Orientações') return 'orientacoes'
    return 'livro'
}

function dataAgendamento(agendamento) {
    if (!agendamento?.dia) return ''

    const [ano, mes, dia] = agendamento.dia.split('-').map(Number)
    const data = new Date(ano, mes - 1, dia)
    const diaDaSemana = new Intl.DateTimeFormat('pt-BR', { weekday: 'short' }).format(data)
    const horario = agendamento.horario?.slice(0, 5)

    return `${diaDaSemana}, ${String(dia).padStart(2, '0')}/${String(mes).padStart(2, '0')}${horario ? ` às ${horario}` : ''}`
}
</script>

<template>
    <main class="min-h-full bg-[#F8FAFC] p-5 md:p-[24px]">
        <p v-if="carregando" class="rounded-[12px] border border-borda bg-white p-8 text-center text-[13px] text-slate-600" role="status">
            Carregando perfil da doadora...
        </p>
        <section v-else-if="erroCarregamento" class="rounded-[12px] border border-red-200 bg-red-50 p-8 text-center text-[13px] text-red-700" role="alert">
            {{ erroCarregamento }}
        </section>
        <div v-else-if="doadora" class="grid items-start gap-6 xl:grid-cols-[minmax(230px,0.8fr)_minmax(0,1.8fr)]">
            <section>
                <h1 class="mb-1 text-[21px] font-bold text-slate-800">Perfil da Doadora</h1>
                <p class="mb-5 text-[12px] text-slate-600">Acompanhe a jornada e o histórico de doações.</p>

                <article class="rounded-[12px] border border-borda bg-white p-4">
                    <header class="flex items-center gap-3">
                        <img
                            v-if="doadora.foto"
                            :src="doadora.foto"
                            :alt="`Foto de ${doadora.nome}`"
                            class="h-[52px] w-[52px] shrink-0 rounded-full object-cover"
                        >
                        <div v-else class="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-blue-100 text-[18px] font-semibold text-slate-700">
                            {{ iniciais }}
                        </div>
                        <div class="min-w-0">
                            <h2 class="truncate text-[15px] font-semibold text-slate-800">{{ doadora.nome }}</h2>
                            <p v-if="doadora.data_nascimento" class="text-[11px] text-slate-500">
                                Nascimento em {{ dataFormatada(doadora.data_nascimento) }}
                            </p>
                            <span
                                class="mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px]"
                                :class="doadora.is_validado ? 'bg-materna/10 text-materna' : 'bg-amber-50 text-amber-700'"
                            >
                                <span class="h-1.5 w-1.5 rounded-full bg-current"></span>
                                {{ doadora.is_validado ? 'Validada' : 'Pendente' }}
                            </span>
                        </div>
                    </header>

                    <div class="mt-4 flex flex-col gap-2.5 text-[11px] text-slate-600">
                        <p class="flex min-w-0 items-center gap-2">
                            <img class="h-3 w-3 shrink-0" src="@/assets/doadora/e-mail.svg" alt="">
                            <span class="truncate">{{ doadora.email }}</span>
                        </p>
                        <p class="flex items-center gap-2">
                            <img class="h-3 w-3 shrink-0" src="@/assets/doadora/telefone.svg" alt="">
                            <span>{{ doadora.telefone }}</span>
                        </p>
                        <p class="flex items-center gap-2">
                            <img class="h-3.5 w-3 shrink-0" src="@/assets/doadora/localizador.svg" alt="">
                            <span>{{ localizacao }}</span>
                        </p>
                    </div>
                </article>

                <article v-if="jornada" class="mt-3 rounded-[12px] border border-borda bg-white p-3">
                    <div class="flex min-h-[82px] flex-col items-center justify-center rounded-[8px] bg-[#EEF3FF] px-4 py-3 text-center">
                        <svg viewBox="0 0 24 24" fill="none" class="mb-1 h-5 w-5 text-materna" aria-hidden="true">
                            <path d="M5 19h14M7 16V9l4 2V7l6 2v7M16 5c0-1.1.9-2 2-2s2 .9 2 2-2 2-2 2-2-.9-2-2Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="text-[17px] font-bold leading-tight text-slate-800">{{ etapasConcluidas }}</span>
                        <span class="text-[9px] font-semibold uppercase leading-tight tracking-wide text-slate-600">
                            Etapas<br>concluídas
                        </span>
                    </div>
                </article>
            </section>

            <section v-if="jornada" class="rounded-[12px] border border-[#D1D8DE] bg-[#F9FAFC] p-4 md:p-5">
                <p v-if="erroAcao" class="mb-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[11px] text-red-700" role="alert">
                    {{ erroAcao }}
                </p>
                <p v-else-if="sucessoAcao" class="mb-3 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-[11px] text-emerald-700" role="status">
                    {{ sucessoAcao }}
                </p>
                <header class="mb-3">
                    <div class="flex items-center justify-between gap-4">
                        <div>
                            <h2 class="text-[15px] font-bold text-slate-800">Jornada de Doação Atual</h2>
                            <p class="text-[10px] text-slate-500">Progresso: {{ progresso }}%</p>
                        </div>
                        <div class="h-[6px] w-[100px] shrink-0 overflow-hidden rounded-full bg-blue-100">
                            <div class="h-full rounded-full bg-materna" :style="{ width: `${progresso}%` }"></div>
                        </div>
                    </div>
                </header>

                <ol class="space-y-3">
                    <li
                        v-for="etapa in etapas"
                        :key="etapa.id_jornada_doacao ?? etapa.id_etapa"
                        class="relative flex gap-2.5"
                    >
                        <div class="relative flex w-9 shrink-0 justify-center">
                            <span
                                v-if="etapa.ordem < etapas.length"
                                class="absolute bottom-[-12px] top-9 w-px bg-blue-200"
                                aria-hidden="true"
                            ></span>
                            <span
                                class="relative z-10 flex h-9 w-9 items-center justify-center rounded-full"
                                :class="etapa.data_conclusao ? 'bg-materna text-white' : 'bg-blue-100 text-slate-600'"
                                :aria-label="statusEtapa(etapa)"
                            >
                                <svg
                                    v-if="etapa.data_conclusao"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    class="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <circle cx="10" cy="10" r="7" fill="white" />
                                    <path d="m7 10 2 2 4-4" stroke="#DE6B72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <img
                                    v-else-if="iconeEtapa(etapa) === 'calendario'"
                                    class="h-4 w-4"
                                    src="@/assets/jornada/calendarioRosa.svg"
                                    alt=""
                                >
                                <img
                                    v-else-if="iconeEtapa(etapa) === 'documento'"
                                    class="h-4 w-4"
                                    src="@/assets/jornada/arquivo.svg"
                                    alt=""
                                >
                                <img
                                    v-else-if="iconeEtapa(etapa) === 'orientacoes'"
                                    class="h-4 w-4"
                                    src="@/assets/jornada/orientacoes.svg"
                                    alt=""
                                >
                                <img
                                    v-else-if="iconeEtapa(etapa) === 'livro'"
                                    class="h-4 w-4"
                                    src="@/assets/jornada/livro.svg"
                                    alt=""
                                >
                                <span v-else class="text-[17px] leading-none" aria-hidden="true">+</span>
                            </span>
                        </div>

                        <article
                            class="min-w-0 flex-1 rounded-[9px] bg-white p-3"
                            :class="etapa.agendamentos?.length
                                ? 'border border-dashed border-slate-300'
                                : etapa.titulo === 'Coleta'
                                    ? 'border border-dashed border-rose-300'
                                    : 'border border-[#D7DDDF]'"
                        >
                            <div class="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                                <div class="min-w-0">
                                    <h3 class="text-[11px] font-semibold text-slate-800">{{ etapa.titulo }}</h3>
                                    <p class="mt-0.5 text-[10px] leading-relaxed text-slate-600">{{ descricaoEtapa(etapa) }}</p>
                                    <p v-if="etapa.data_conclusao" class="mt-1.5 text-[9px] text-materna">
                                        Concluída em {{ dataFormatada(etapa.data_conclusao) }}
                                    </p>
                                </div>
                                <span
                                    v-if="!etapa.documentos?.length"
                                    class="w-fit shrink-0 rounded-full px-2 py-1 text-[9px]"
                                    :class="etapa.data_conclusao
                                        ? 'bg-materna/10 text-materna'
                                        : 'bg-amber-50 text-amber-700'"
                                >
                                    {{ statusEtapa(etapa) }}
                                </span>
                                <div v-else class="flex flex-col gap-2 sm:items-end">
                                    <template v-for="documento in etapa.documentos" :key="documento.id">
                                        <div class="flex w-full flex-col items-start gap-2 sm:items-end">
                                            <span
                                                class="inline-flex min-h-6 items-center rounded-full border px-3 py-1 text-[10px] font-semibold"
                                                :class="statusDocumento(documento) === 'Aceito'
                                                    ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                                                    : statusDocumento(documento) === 'Recusado'
                                                        ? 'border-rose-200 bg-rose-50 text-rose-800'
                                                        : 'border-amber-200 bg-amber-50 text-amber-800'"
                                            >
                                                {{ statusDocumento(documento) }}
                                                <template v-if="documento.motivo_recusa"> — {{ documento.motivo_recusa }}</template>
                                            </span>
                                            <div class="flex flex-wrap items-center gap-2">
                                                <a
                                                    v-if="linkDocumento(documento)"
                                                    :href="linkDocumento(documento)"
                                                    :download="nomeArquivo(documento)"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    :aria-label="`Baixar ${nomeArquivo(documento)}`"
                                                    class="inline-flex h-[34px] min-w-[92px] items-center justify-center rounded-[7px] bg-materna px-4 text-[12px] font-semibold text-white transition-colors hover:bg-rose-600"
                                                >
                                                    Baixar
                                                </a>
                                                <button
                                                    v-else
                                                    type="button"
                                                    disabled
                                                    title="O link para baixar este documento não está disponível."
                                                    class="inline-flex h-[34px] min-w-[92px] cursor-not-allowed items-center justify-center rounded-[7px] bg-materna px-4 text-[12px] font-semibold text-white opacity-50"
                                                >
                                                    Baixar
                                                </button>
                                                <button
                                                    v-if="statusDocumento(documento) === 'Pendente'"
                                                    type="button"
                                                    :disabled="Boolean(acaoEmAndamento)"
                                                    class="inline-flex h-[34px] min-w-[92px] items-center justify-center rounded-[7px] border-2 border-materna bg-white px-4 text-[12px] font-semibold text-materna transition-colors hover:bg-rose-50 disabled:cursor-wait disabled:opacity-50"
                                                    @click="atualizarStatusDocumento(documento, 'Recusado')"
                                                >
                                                    Recusar
                                                </button>
                                                <button
                                                    v-if="statusDocumento(documento) === 'Pendente'"
                                                    type="button"
                                                    :disabled="Boolean(acaoEmAndamento)"
                                                    class="inline-flex h-[34px] min-w-[92px] items-center justify-center rounded-[7px] bg-materna px-4 text-[12px] font-semibold text-white transition-colors hover:bg-rose-600 disabled:cursor-wait disabled:opacity-50"
                                                    @click="atualizarStatusDocumento(documento, 'Aceito')"
                                                >
                                                    Aceitar
                                                </button>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </div>

                            <div
                                v-for="agendamento in etapa.agendamentos"
                                :key="agendamento.id"
                                class="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-2"
                            >
                                <span class="text-[10px] text-slate-600">
                                    {{ dataAgendamento(agendamento) }}
                                </span>
                                <div v-if="agendamento.status?.toLocaleLowerCase('pt-BR') === 'pendente'" class="flex flex-wrap items-center gap-1.5">
                                    <span class="rounded-full bg-amber-50 px-2 py-1 text-[9px] text-amber-700">
                                        Pendente
                                    </span>
                                    <button
                                        type="button"
                                        :disabled="Boolean(acaoEmAndamento)"
                                        class="rounded-md border border-rose-200 px-2.5 py-1 text-[10px] font-medium text-materna transition-colors hover:bg-rose-50 disabled:cursor-wait disabled:opacity-50"
                                        @click="atualizarStatusAgendamento(agendamento, 'Recusado')"
                                    >
                                        Recusar
                                    </button>
                                    <button
                                        type="button"
                                        :disabled="Boolean(acaoEmAndamento)"
                                        class="rounded-md bg-materna px-2.5 py-1 text-[10px] font-medium text-white transition-colors hover:bg-rose-600 disabled:cursor-wait disabled:opacity-50"
                                        @click="atualizarStatusAgendamento(agendamento, 'Aceito')"
                                    >
                                        Aceitar
                                    </button>
                                </div>
                                <span
                                    v-else
                                    class="rounded-full px-2 py-1 text-[9px]"
                                    :class="agendamento.status?.toLocaleLowerCase('pt-BR') === 'aceito'
                                        ? 'bg-emerald-50 text-emerald-700'
                                        : 'bg-rose-50 text-rose-700'"
                                >
                                    {{ agendamento.status }}
                                </span>
                            </div>

                            <div
                                v-if="etapa.titulo === 'Coleta' && (etapa.ciclo || etapa.encerrado)"
                                class="mt-3 border-t border-slate-100 pt-2"
                            >
                                <div class="flex flex-wrap items-center justify-between gap-2">
                                    <span class="text-[10px] font-semibold text-slate-700">
                                        <template v-if="etapa.ciclo_total">
                                            Ciclo atual:
                                            <span class="text-materna">
                                                {{ Math.min(Number(etapa.ciclo_total), Number(etapa.ciclo_total) - Number(etapa.ciclo) + 1) }}/{{ etapa.ciclo_total }}
                                            </span>
                                        </template>
                                        <template v-else>
                                            Ciclos restantes: <span class="text-materna">{{ etapa.ciclo }}</span>
                                        </template>
                                    </span>
                                    <div
                                        v-if="etapa.ciclo_total"
                                        class="flex items-center gap-1"
                                        :aria-label="`Ciclo ${Math.min(Number(etapa.ciclo_total), Number(etapa.ciclo_total) - Number(etapa.ciclo) + 1)} de ${etapa.ciclo_total}`"
                                    >
                                        <span
                                            v-for="ciclo in Math.min(Number(etapa.ciclo_total), 8)"
                                            :key="ciclo"
                                            class="h-2.5 w-1.5 rounded-[2px]"
                                            :class="ciclo <= Number(etapa.ciclo_total) - Number(etapa.ciclo) + 1 ? 'bg-materna' : 'bg-slate-200'"
                                        ></span>
                                        <span v-if="Number(etapa.ciclo_total) > 8" class="text-[9px] text-slate-500">
                                            +{{ Number(etapa.ciclo_total) - 8 }}
                                        </span>
                                    </div>
                                    <span
                                        class="rounded-md px-2 py-1 text-[9px] font-semibold"
                                        :class="etapa.data_conclusao ? 'bg-materna text-white' : 'bg-slate-100 text-slate-600'"
                                    >
                                        {{ etapa.data_conclusao ? 'Concluído' : 'Em andamento' }}
                                    </span>
                                </div>

                                <form
                                    v-if="!etapa.data_conclusao && (!etapa.ciclo_total || Number(etapa.ciclo) === Number(etapa.ciclo_total))"
                                    class="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-100 bg-[#F9FAFC] p-2.5"
                                    @submit.prevent="definirQuantidadeCiclos(etapa)"
                                >
                                    <label class="flex items-center gap-2 text-[10px] font-medium text-slate-600">
                                        Quantidade de ciclos:
                                        <input
                                            v-model="quantidadeCiclosInput"
                                            type="number"
                                            min="1"
                                            :max="MAX_CICLOS"
                                            class="h-7 w-[68px] rounded-md border border-slate-200 bg-white px-2 text-[10px] text-slate-700 outline-none focus:border-materna"
                                            aria-label="Quantidade de ciclos"
                                            @input="mensagemCiclos = ''; erroCiclos = ''"
                                        >
                                    </label>
                                    <button
                                        type="submit"
                                        :disabled="Boolean(acaoEmAndamento)"
                                        class="rounded-md bg-materna px-3 py-1.5 text-[10px] font-medium text-white transition-colors hover:bg-rose-600 disabled:cursor-wait disabled:opacity-50"
                                    >
                                        Definir ciclos
                                    </button>
                                    <p v-if="erroCiclos" class="w-full text-[10px] text-red-600" role="alert">
                                        {{ erroCiclos }}
                                    </p>
                                    <p v-else-if="mensagemCiclos" class="w-full text-[10px] text-emerald-700" role="status">
                                        {{ mensagemCiclos }}
                                    </p>
                                </form>

                                <div class="mt-3 border-t border-slate-100 pt-2">
                                    <div v-if="!etapa.encerrado" class="flex flex-wrap gap-2">
                                        <button
                                            type="button"
                                            :disabled="Boolean(acaoEmAndamento) || !Number(etapa.ciclo)"
                                            class="rounded-md bg-materna px-3 py-1.5 text-[10px] font-medium text-white transition-colors hover:bg-rose-600 disabled:cursor-wait disabled:opacity-50"
                                            @click="concluirCicloAtual(etapa)"
                                        >
                                            Concluir ciclo
                                        </button>
                                        <button
                                            type="button"
                                            :disabled="Boolean(acaoEmAndamento) || !Number(etapa.ciclo)"
                                            class="inline-flex items-center gap-1.5 rounded-md border border-rose-200 bg-rose-50 px-3 py-1.5 text-[10px] font-medium text-rose-600 transition-colors hover:bg-rose-100 disabled:cursor-wait disabled:opacity-50"
                                            @click="encerrarTodosCiclos(etapa)"
                                        >
                                            <svg viewBox="0 0 16 16" fill="none" class="h-3 w-3" aria-hidden="true">
                                                <path d="M8 2.25v5.5M4.15 4.65a5.25 5.25 0 1 0 7.7 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                            </svg>
                                            Encerrar todos os ciclos
                                        </button>
                                    </div>
                                    <span v-else class="text-[10px] font-medium text-emerald-700" role="status">
                                        Todos os ciclos foram encerrados.
                                    </span>
                                </div>
                            </div>
                        </article>
                    </li>
                </ol>
                <footer v-if="etapas.some((etapa) => etapa.id_jornada_doacao)" class="mt-4 border-t border-slate-200 pt-3">
                    <p v-if="jornadaEncerrada" class="text-[11px] font-medium text-emerald-700" role="status">
                        Jornada encerrada.
                    </p>
                    <button
                        v-else
                        type="button"
                        :disabled="Boolean(acaoEmAndamento)"
                        class="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-[11px] font-semibold text-rose-700 transition-colors hover:bg-rose-100 disabled:cursor-wait disabled:opacity-50"
                        @click="solicitarEncerramentoJornada"
                    >
                        Encerrar jornada da doadora
                    </button>
                </footer>
            </section>
        </div>

        <section v-else class="rounded-[12px] border border-borda bg-white p-8 text-center">
            <h1 class="text-[18px] font-semibold text-slate-800">Doadora não encontrada</h1>
            <p class="mt-2 text-[13px] text-slate-600">Não foi possível encontrar os dados deste perfil.</p>
        </section>

        <div v-if="mostrarDialogRecusa" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4" @click.self="mostrarDialogRecusa = false">
            <form class="w-full max-w-md rounded-xl bg-white p-5 shadow-xl" @submit.prevent="confirmarRecusaDocumento">
                <h2 class="text-base font-semibold text-slate-800">Recusar documento</h2>
                <p class="mt-1 text-sm text-slate-600">Informe o motivo para registrar a recusa.</p>
                <label class="mt-4 block text-sm font-medium text-slate-700">
                    Motivo da recusa
                    <textarea
                        v-model="motivoRecusa"
                        required
                        maxlength="255"
                        rows="3"
                        class="mt-1 w-full rounded-md border border-slate-300 p-2 text-sm outline-none focus:border-materna"
                    ></textarea>
                </label>
                <p v-if="erroAcao" class="mt-2 text-sm text-red-700" role="alert">{{ erroAcao }}</p>
                <div class="mt-4 flex justify-end gap-2">
                    <button type="button" class="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700" @click="mostrarDialogRecusa = false">
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        :disabled="Boolean(acaoEmAndamento)"
                        class="rounded-md bg-materna px-3 py-2 text-sm font-semibold text-white disabled:opacity-50"
                    >
                        {{ acaoEmAndamento ? 'Enviando...' : 'Confirmar recusa' }}
                    </button>
                </div>
            </form>
        </div>

        <div v-if="mostrarDialogEncerramento" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4" @click.self="mostrarDialogEncerramento = false">
            <section class="w-full max-w-md rounded-xl bg-white p-5 shadow-xl">
                <h2 class="text-base font-semibold text-slate-800">Encerrar jornada?</h2>
                <p class="mt-2 text-sm text-slate-600">Esta ação encerra os vínculos ativos da jornada e cancela os agendamentos associados. Não pode ser desfeita.</p>
                <p v-if="erroAcao" class="mt-2 text-sm text-red-700" role="alert">{{ erroAcao }}</p>
                <div class="mt-4 flex justify-end gap-2">
                    <button type="button" class="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700" @click="mostrarDialogEncerramento = false">
                        Cancelar
                    </button>
                    <button
                        type="button"
                        :disabled="Boolean(acaoEmAndamento)"
                        class="rounded-md bg-materna px-3 py-2 text-sm font-semibold text-white disabled:opacity-50"
                        @click="confirmarEncerramentoJornada"
                    >
                        {{ acaoEmAndamento ? 'Encerrando...' : 'Confirmar encerramento' }}
                    </button>
                </div>
            </section>
        </div>
    </main>
</template>
