<script setup>
import CardIndicador from '@/components/dashboard/CardIndicador.vue';

    const hoje = new Date()

    const diaSemana = hoje.toLocaleDateString('pt-BR',{
        weekday:'long'
    })

    const diaSemanaFormatado = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1)
    const dia = hoje.toLocaleDateString('pt-BR',{
        day:'numeric'
    })

    const mes = hoje.toLocaleDateString('pt-BR',{
        month: 'long'
    })

    const ano = hoje.getUTCFullYear()
</script>

<template>
<main class="w-full min-h-screen bg-[#F8FAFC] p-[30px]">
    <nav>
        <!--Pegar data mes e ano local em nome e o dia da semana-->
        <p>{{diaSemanaFormatado}},{{ dia }} de {{ mes }} de {{ ano }}</p>
        <!--Pega se é dia tarde ou noite e o nome do banco de leite-->
        <h2>aaaaaaaaaaaaaa</h2>
    </nav>
    
    <CardIndicador/>
    
</main>
</template>

