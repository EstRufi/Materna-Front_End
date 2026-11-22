<script setup>
import CadDoadora from '@/components/doadora/cadDoadora.vue';
import { computed, ref } from 'vue';

const filtros = [
    'Todas',
    'Iniciadas',
    'Em andamento',
    'Ativas',
    'Finalizadas',
]

const filtroSelecionado = ref('Todas')

const doadorasFiltradas = computed(() => {

    if (filtroSelecionado.value === 'Todas') {
        return doadoras.value
    }

    return doadoras.value.filter(doadora =>
        doadora.status_jornada === filtroSelecionado.value
    )
})

const doadoras = ref([
    {
        id: 1,
        nome: 'Maria Silva',
        email: 'maria@email.com',
        telefone: '11981234567',
        cidade: 'São Paulo',
        sigla_estado: 'SP',
        foto: '',
        data_inicio: '2026-06-12',
        status_jornada: 'Finalizadas',
        jornada: {
            id: 3,
            nome: 'Jornada de Acolhimento e Doação',
            etapa_atual: {
                id: 5,
                ordem: 4,
                titulo: 'Acompanhamento de Doações',
                data_conclusao: null
            },
            total_etapas: 5,
            etapas_concluidas: 4,
            progresso: 80
        }
    },
    {
        id: 2,
        nome: 'Ana Souza',
        email: 'ana@email.com',
        telefone: '11996712233',
        cidade: 'Guarulhos',
        sigla_estado: 'SP',
        foto: '',
        data_inicio: '2026-07-01',
        status_jornada: 'Em andamento',
        jornada: {
            id: 3,
            nome: 'Jornada de Acolhimento e Doação',
            etapa_atual: {
                id: 4,
                ordem: 2,
                titulo: 'Preparação',
                data_conclusao: null
            },
            total_etapas: 5,
            etapas_concluidas: 2,
            progresso: 40
        }
    },
    {
        id: 3,
        nome: 'Carla Oliveira',
        email: 'carla@email.com',
        telefone: '11987654321',
        cidade: 'São Paulo',
        sigla_estado: 'SP',
        foto: '',
        data_inicio: '2026-08-15',
        status_jornada: 'Iniciadas',
        jornada: {
            id: 3,
            nome: 'Jornada de Acolhimento e Doação',
            etapa_atual: {
                id: 1,
                ordem: 1,
                titulo: 'Boas-vindas',
                data_conclusao: null
            },
            total_etapas: 5,
            etapas_concluidas: 1,
            progresso: 20
        }
    },
        {
        id: 4,
        nome: ' Silva',
        email: 'maria@email.com',
        telefone: '11981234567',
        cidade: 'São Paulo',
        sigla_estado: 'SP',
        foto: '',
        data_inicio: '2026-06-12',
        status_jornada: 'Ativas',
        jornada: {
            id: 3,
            nome: 'Jornada de Acolhimento e Doação',
            etapa_atual: {
                id: 5,
                ordem: 4,
                titulo: 'Acompanhamento de Doações',
                data_conclusao: null
            },
            total_etapas: 5,
            etapas_concluidas: 4,
            progresso: 80
        }
    }
])
</script>

<template>
    <main class="bg-[#F8FAFC] p-[30px] w-full min-h-full">
        <header class="flex justify-center">
            <section class="flex-wrap bg-white flex justify-between px-[4px] items-center w-full max-w-[524px] min-w-0 min-h-[43px] border border-borda rounded-[22px] ">
                <button
                v-for="itemFiltro in filtros"
                :key="itemFiltro"
                @click="filtroSelecionado = itemFiltro"
                :class="[
                    'whitespace-nowrap h-[33px] px-[20px] py-[6px] text-[14px] rounded-full transition-colors duration-200',
                    filtroSelecionado === itemFiltro
                        ? 'bg-materna text-white'
                        : 'bg-transparent text-slate-600'
                ]"
                >
                {{ itemFiltro }}
                </button>
            </section>
        </header>
        <div class="mt-[30px] justify-items-center grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-[25px]">
            <CadDoadora
                v-for="doadora in doadorasFiltradas"
                :key="doadora.id"
                :doadora="doadora"
            />
        </div>
    </main>
</template>