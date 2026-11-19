<script setup>
    import { useRoute } from 'vue-router';
    const router = useRoute()
</script>
<!--Aqui tera consumo de api na hora da pesquisa-->
<template>
    <header class="p-[32px] flex flex-row h-[80px] w-full bg-white items-center justify-between border-b-2 border-[#E2E8F0] ">
    <RouterLink
    v-if="router.meta.voltar"
    :to="router.meta.voltar"
    class="flex items-center gap-2">
        <img src="@/assets/perfilDoadora/setaEsquerda.svg" alt="Voltar" class="w-4">

        <span class="font-light">{{ router.meta.titulo }}</span>
    </RouterLink>

    <h1 v-else>
        {{ router.meta.titulo }}
    </h1>
    </header>
</template>