<script setup>
defineProps({
    titulo: String,
    descricao: String,
    informacoes: Array,

    progresso:Boolean,
    etapaAtual:Number,
    quantidadeEtapas:Number,

    dadosFooter:Array
})
</script>
<template>
    <div>
        <!-- header -->
        <div>
            <img src="../assets/logoMaterna.svg" alt="logo">
            <h1></h1>
            <p></p>
        </div>

        <!-- Informação -->
        <div>
            <h2>{{ titulo }}</h2>
            <p>{{ descricao }}</p>
        </div>
    
        <div>
            <div v-for="texto in informacoes" :key="texto">
                <div>
                    <img src="" alt="">
                </div>
                <p>{{ texto }}</p>
            </div>
        </div>
        <br>

        <!-- Barra de progresso -->
        <div v-if="progresso">
            <div>
                <div :style="{width:`${(etapaAtual/quantidadeEtapas)*100}%`}">
                </div>
            </div>
        </div>

        <br>
        <!--Footer-->
        <div>
            <div :class="{
                'justify-center':dadosFooter.length ===1,
                'justify-between':dadosFooter.length ===2
            }">
                <p v-for="item in dadosFooter" :key="item">
                    {{ item }}
                </p>
            </div>
        </div>
    </div>
</template>