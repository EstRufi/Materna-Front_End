<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import CadDoadora from '@/components/doadora/cadDoadora.vue'
import { calcularProgressoJornada, listarDoadoras } from '@/services/doadoraService'

defineOptions({ name: 'DoadoraView' })

const filtros = ['Todas', 'Iniciadas', 'Em andamento', 'Ativas', 'Finalizadas']
const route = useRoute()
const filtroSelecionado = ref('Todas')
const doadoras = ref([])
const carregando = ref(true)
const erroCarregamento = ref('')

onMounted(async () => {
    try {
        doadoras.value = await listarDoadoras()
    } catch (error) {
        erroCarregamento.value = error instanceof Error
            ? error.message
            : 'Não foi possível carregar as doadoras.'
    } finally {
        carregando.value = false
    }
})

const doadorasFiltradas = computed(() => {
    const termo = String(route.query.busca ?? '').trim().toLocaleLowerCase('pt-BR')

    return doadoras.value.filter((doadora) => {
        const correspondeBusca =
            !termo ||
            [doadora.nome, doadora.email, doadora.telefone, doadora.endereco?.cidade]
                .some((valor) => valor?.toLocaleLowerCase('pt-BR').includes(termo))

        const progresso = calcularProgressoJornada(doadora)
        const correspondeFiltro =
            filtroSelecionado.value === 'Todas' ||
            (filtroSelecionado.value === 'Iniciadas' && progresso === 0) ||
            (filtroSelecionado.value === 'Em andamento' && progresso > 0 && progresso < 100) ||
            (filtroSelecionado.value === 'Ativas' && doadora.is_validado && progresso < 100) ||
            (filtroSelecionado.value === 'Finalizadas' && progresso === 100)

        return correspondeBusca && correspondeFiltro
    })
})
</script>

<template>
    <main class="min-h-full w-full bg-[#F8FAFC] p-5 md:p-[30px]">
        <header class="flex justify-center">
            <section class="flex min-h-[43px] w-full max-w-[524px] flex-wrap items-center justify-between rounded-[22px] border border-borda bg-white px-[4px]">
                <button
                    v-for="itemFiltro in filtros"
                    :key="itemFiltro"
                    type="button"
                    @click="filtroSelecionado = itemFiltro"
                    :class="[
                        'h-[33px] whitespace-nowrap rounded-full px-3 py-[6px] text-[12px] transition-colors duration-200 sm:px-5 sm:text-[14px]',
                        filtroSelecionado === itemFiltro
                            ? 'bg-materna text-white'
                            : 'bg-transparent text-slate-600'
                    ]"
                >
                    {{ itemFiltro }}
                </button>
            </section>
        </header>
        <section class="mt-[26px] grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 xl:grid-cols-3">
            <p v-if="carregando" class="col-span-full py-12 text-center text-[14px] text-slate-500">
                Carregando doadoras...
            </p>
            <p v-else-if="erroCarregamento" class="col-span-full rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-center text-[13px] text-red-700" role="alert">
                {{ erroCarregamento }}
            </p>
            <CadDoadora
                v-else
                v-for="doadora in doadorasFiltradas"
                :key="doadora.id"
                :doadora="doadora"
            />
            <p v-if="!carregando && !erroCarregamento && !doadorasFiltradas.length" class="col-span-full py-12 text-center text-[14px] text-slate-500">
                Nenhuma doadora encontrada.
            </p>
        </section>
    </main>
</template>