<script setup>
defineProps({
    titulo:String,
    descricao: String,
    informacoes: Array,

    progresso: Boolean,
    etapaAtual: Number,
    quantidadeEtapas: Number,

    dadosFooter:Array
})
</script>

<template>
    <div class="relative flex min-h-screen flex-1 flex-col bg-[#df7880] px-7">

        <!--header-->
        <div class="absolute top-4 left-10 flex items-center gap-2" >
            <img 
            src="/public/logoMaterna.svg" 
            alt="logo" 
            class="w-16 h-16 object-contain">

            <div>
                <h1 class="text-[17px] font-bold text-[#ffffff] -600">
                    Materna
                </h1>
                <p class="text-[#ffffff] text-sm">
                    Painelinstitucional
                </p>
            </div>
        </div>

        <!--Informação-->
        <div class="mt-40 mb-10 w-full min-w-0 px-10">
            <h2 class="text-[30px] font-bold leading-tight text left
            text-white whitespace-pre-line mb-3">
                {{ titulo }}
            </h2>

            <p class="mt-1 text-[16px] text-white whitespace-pre-line">
                {{ descricao }}
            </p>
        </div> 

        <!-- Set-->
        <div class="mt-0 w-full pl-10
        flex flex-col items-start gap-2">
            <div 
            v-for="texto in informacoes"
            :key="texto"
            class="flex items-center gap-2">

                <div class="flex h-6 w-6 shrink-0 items-center 
                justify-center rounded-full bg-white/30">
                    <img 
                    src="/src/assets/telaLogin/Seta.svg" 
                    alt="Seta" 
                    class="h-3 w-3 shrink-0 object-contain gap-2">
                </div>

                <p class="text-[16px] leading-8 text-white ">
                    {{ texto }}
                </p>
            </div>
        </div>

        <!-- Barra de progresso-->
        <div class="w-full px-10 mt-13">
            <div class="h-px w-190 bg-white/20 mb-8"></div>
            <div class="h-2 w-190 rounded-full bg-[#94A3B8] ">
                <div class="h-2 w-[25%] rounded-full bg-white">
                </div>
            </div>
        </div>

        <div class="w-full px-10 mt-40">
            <div class="h-px w-190 bg-white/20 mb-8"></div>
        </div>

        <div class="absolute bottom-6 left-10 right-10">
            <div class="flex w-full" 
            :class="{
                'justify-center': dadosFooter?.length === 1,
                'justify-between': dadosFooter?.length ===2
            }">
            <p 
            v-for="item in dadosFooter"
            :key="item" 
            class="text-xs text-white">
            {{ item }}
            </p>
            </div>
        </div>
    </div>

</template>