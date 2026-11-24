<script setup>
import LateralPerfilDoadora from '@/components/perfilDoadora/LateralPerfilDoadora.vue';
import { ref } from 'vue';


const doadora = ref({
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
})
</script>
<template>
    <main class="w-full min-h-full bg-[#F8FAFC] p-[30px]">
        <div class="grid grid-cols-1 lg:grid-cols-[350px_minmax(0,1fr)] gap-[24px] items-start">

            <aside class="w-full min-w-0">
                <LateralPerfilDoadora :doadora="doadora" />
            </aside>

            <section class="w-full min-w-0">
                <JornadaDoadora :doadora="doadora" />
            </section>
        </div>
    </main>
</template>