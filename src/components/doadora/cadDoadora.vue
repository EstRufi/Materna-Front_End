<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { calcularProgressoJornada } from '@/services/doadoraService'

const props = defineProps({
    doadora: {
        type: Object,
        required: true
    }
})

const progresso = computed(() => calcularProgressoJornada(props.doadora))

const status = computed(() => {
    if (progresso.value >= 100) return 'Finalizada'
    if (progresso.value > 0) return 'Em andamento'
    return 'Iniciada'
})

const iniciais = computed(() =>
    props.doadora.nome
        .split(' ')
        .map((parte) => parte[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
)

const localizacao = computed(() => {
    const { cidade, estado } = props.doadora.endereco ?? {}
    return [cidade, estado].filter(Boolean).join(', ')
})

const dataNascimento = computed(() => {
    const data = props.doadora.data_nascimento
    if (!data) return ''

    const [ano, mes, dia] = data.split('-').map(Number)
    return new Intl.DateTimeFormat('pt-BR').format(new Date(ano, mes - 1, dia))
})
</script>

<template>
    <RouterLink
        :to="`/doadora/${doadora.id}`"
        class="block min-h-[188px] w-full max-w-[347px] rounded-[12px] border border-borda bg-white p-4 transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-materna"
    >
        <header class="mb-4 flex min-w-0 items-start gap-2">
            <img
                v-if="doadora.foto"
                :src="doadora.foto"
                :alt="`Foto de ${doadora.nome}`"
                class="h-[36px] w-[36px] shrink-0 rounded-full object-cover"
            >
            <div v-else class="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#F1F3F5] text-[12px] font-semibold text-materna">
                {{ iniciais }}
            </div>

            <div class="min-w-0 flex-1">
                <h2 class="truncate text-[13px] font-semibold text-slate-800">{{ doadora.nome }}</h2>
                <p class="mt-0.5 text-[11px] text-slate-500">
                    {{ dataNascimento ? `Nascimento ${dataNascimento}` : 'Cadastro de doadora' }}
                </p>
            </div>

            <span
                class="inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-[10px]"
                :class="status === 'Finalizada'
                    ? 'bg-emerald-50 text-emerald-700'
                    : status === 'Iniciada'
                        ? 'bg-amber-50 text-amber-700'
                        : 'bg-orange-50 text-orange-700'"
            >
                <span class="h-1 w-1 rounded-full bg-current"></span>
                {{ status }}
            </span>
        </header>

        <div class="mb-5 flex flex-col gap-2 text-[11px] text-slate-500">
            <p class="flex min-w-0 items-center gap-2">
                <img class="h-[12px] w-[12px] shrink-0" src="@/assets/doadora/e-mail.svg" alt="">
                <span class="truncate">{{ doadora.email }}</span>
            </p>
            <p class="flex items-center gap-2">
                <img class="h-[12px] w-[12px] shrink-0" src="@/assets/doadora/telefone.svg" alt="">
                <span>{{ doadora.telefone }}</span>
            </p>
            <p class="flex items-center gap-2">
                <img class="h-[12px] w-[12px] shrink-0" src="@/assets/doadora/localizador.svg" alt="">
                <span>{{ localizacao }}</span>
            </p>
        </div>

        <footer v-if="doadora.jornada">
            <div class="mb-1.5 flex justify-between gap-3 text-[11px]">
                <span class="font-medium text-slate-700">Jornada</span>
                <span class="shrink-0 text-slate-500">{{ progresso }}%</span>
            </div>
            <div class="h-[6px] overflow-hidden rounded-full bg-[#E5E7E7]">
                <div class="h-full rounded-full bg-materna" :style="{ width: `${progresso}%` }"></div>
            </div>
        </footer>
    </RouterLink>
</template>
