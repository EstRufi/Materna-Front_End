<script setup>
    import { useRoute } from 'vue-router';
    const router = useRoute()
</script>
<!--Aqui tera consumo de api na hora da pesquisa-->
<template>
    <header class="p-[32px] flex flex-row h-[80px] w-full bg-white items-center justify-between border-b-2 border-[#E2E8F0] ">
        <h1 class="text-[20px] font-bold ">
            {{ router.meta.titulo }}
        </h1>
        <div class=" flex-row flex gap-2 bg-[#F8FAFC] pl-[16px] pt-[9px] pr-[16px] pb-[9px] rounded-lg border-2 border-[#E2E8F0]">
            <img src="@/assets/pesquisar.svg" alt="um icone de lupa para simbolizar pesquisa">
            <input type="text" placeholder="Buscar" class="outline-none" >
        </div>
    </header>
</template>