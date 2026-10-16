<script setup>
import LateralInformativo from '@/components/login/LateralInformativo.vue';


</script>
<template>
<LateralInformativo
    :titulo=" `Gestão completa do seu 
    banco de leite humano`"
    :descricao="`Acompanhe a agenda, gerencie doadoras, organize 
        campanhas e visualize relatórios em um único painel, 
        pensado para o dia a dia da instituição.`"
    :informacoes="[
        'Agenda e disponibilidade em tempo real',
        'Acompanhamento da jornada das doadoras',
        'Relatórios de comparecimento e alcance'
    ]"
    :progresso="false"

    dados-footer="Materna · Plataforma de apoio à doação de leite humano"
/>
</template>