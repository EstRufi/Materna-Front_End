<script setup>
import CadastroCampanha from '@/components/campanha/CadastroCampanha.vue';
import CardCampanha from '@/components/campanha/CardCampanha.vue';
import { listarCampanha } from '@/services/campanhaService';
import { onMounted, ref } from 'vue';

// const campanha = [
//     {   
//         id: 1,
//         titulo: 'Esta frase foi criada exatamente com cem caracteres para o teu teste de contagem.',
//         descricao: 'Ações de incentivo à doação.',
//         foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKOSQbuJ5Hzh0ekE0TljB7kmeX5xIJHhhS0m7HWh-LQ&s=10',
//         data_inicio: '2026-11-01',
//         data_fim: '2026-11-30',
//         is_ativo: false
//     },
//     {
//         id: 2,
//         titulo: 'sabe do Leite Humano',
//         descricao: 'Incentivo à doação.',
//         foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKOSQbuJ5Hzh0ekE0TljB7kmeX5xIJHhhS0m7HWh-LQ&s=10',
//         data_inicio: '2026-11-01',
//         data_fim: '2026-11-30',
//         is_ativo: true
//     },

// ]

const campanha = ref([])
const carregando = ref(true)
const errou = ref('')
const mostrarCadastroCampanha = ref(false)

onMounted(async () => {
    try {
        campanha.value = await listarCampanha()
    } catch (error) {
        errou.value = "Não foi possíivel carregar as campanhas, por favor aguarde. (ligue a API)"
        console.error(error)
    } finally{
        carregando.value = false    
    }
})
</script>

<template>
    <main class="bg-[#F8FAFC] p-[30px] w-full min-h-screen">
        <nav class="flex justify-between gap-[10px]">
            <span class="text-[16px] text-texto-claro">Divulgue campanhas de incentivo à doação para as doadoras no aplicativo.</span>
            <button 
            v-if="!mostrarCadastroCampanha"
            @click="mostrarCadastroCampanha = true"
            class="group bg-materna px-[16px] py-[8px] flex justify-center items-center rounded-[8px] gap-[8px] hover:bg-pink-50 hover:text-slate-600 transition-colors">
                <img class="h-[16px] w-[14px] transition-all group-hover:brightness-0 group-hover:opacity-60" src="@/assets/campanha/+.svg" alt="Icon de +">
                <p class="text-white group-hover:text-slate-600 font-medium text-[14px]">Nova campanha</p>
            </button>


        </nav>

        <Transition 
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2">

            <CadastroCampanha
                v-if="mostrarCadastroCampanha"
                @fechar="mostrarCadastroCampanha = false"
            />
        </Transition>

        <p class="text-[200px]" v-if="carregando">Carregando campanhas...</p>
        <p class="text-[30px]" v-else-if="errou">{{ errou }}</p>
        <div v-else class="flex flex-wrap gap-[24px] mt-[30px]">
            <CardCampanha 
            v-for="itensCampanha in campanha"
            :key="itensCampanha.id"
            :campanha="itensCampanha"/>
        </div>
    </main>
</template>