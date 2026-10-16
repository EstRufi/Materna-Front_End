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
    <div class="bg-red-300 pl-7 pr-7">
        <!-- header -->
        <div class="flex flex-row items-center gab-3">
            <img 
            src="/public/logoMaterna.svg" 
            alt="logo" 
            class="w-16 h-16 object-contain">

            <div>
                <h1 class="text-2x1 font-bold text-black-600">
                    Materna
                </h1>
                <p class="text-[#ffffff] text-sm">
                    Painelinstitucional
                </p>
            </div>
        </div>

        <!-- Informação -->
        <div class="pl-10 pr-10 mt-60">
            <h2 class="!text-[40px] text-justify text-[#ffffff] font-bold whitespace-pre-line">
                {{ titulo }}
            </h2>

            <p class="text-[#ffffff] whitespace-pre-line">
                {{ descricao }}</p>
        </div>
    
        <div class="flex flex-col items-start gap-2">
            <div v-for="texto in informacoes" :key="texto">
                <div>
                    <img src="/src/assets/telaLogin/Seta.svg" alt="Seta">
                </div>
                <p class="text-[#ffffff]">{{ texto }}</p>
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