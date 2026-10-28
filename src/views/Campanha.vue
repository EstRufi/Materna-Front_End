<script setup>
import CardCampanha from '@/components/campanha/CardCampanha.vue';

const campanha = [
    {   
        id: 1,
        titulo: 'Esta frase foi criada exatamente com cem caracteres para o teu teste de contagem.',
        descricao: 'Ações de incentivo à doação.',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKOSQbuJ5Hzh0ekE0TljB7kmeX5xIJHhhS0m7HWh-LQ&s=10',
        data_inicio: '2026-11-01',
        data_fim: '2026-11-30',
        is_ativo: false
    },
    {
        id: 2,
        titulo: 'sabe do Leite Humano',
        descricao: 'Incentivo à doação.',
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKOSQbuJ5Hzh0ekE0TljB7kmeX5xIJHhhS0m7HWh-LQ&s=10',
        data_inicio: '2026-11-01',
        data_fim: '2026-11-30',
        is_ativo: true
    },

]

</script>

<template>
    <main class="bg-[#F8FAFC] p-[30px] w-full min-h-screen">
        <nav class="flex justify-between gap-[10px]">
            <span class="text-[16px] text-texto-claro">Divulgue campanhas de incentivo à doação para as doadoras no aplicativo.</span>
            <button class="group bg-materna px-[16px] py-[8px] flex justify-center items-center rounded-[8px] gap-[8px] hover:bg-pink-50 hover:text-slate-600 transition-colors">
                <img class="h-[16px] w-[14px] transition-all group-hover:brightness-0 group-hover:opacity-60" src="@/assets/campanha/+.svg" alt="Icon de +">
                <p class="text-white group-hover:text-slate-600 font-medium text-[14px]">Nova campanha</p>
            </button>
        </nav>
        <div class="flex flex-wrap gap-[24px] mt-[30px]">
            <CardCampanha 
            v-for="itensCampanha in campanha"
            :key="itensCampanha.id"
            :campanha="itensCampanha"/>
        </div>
    </main>
</template>