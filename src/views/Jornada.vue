<script setup>
import CadastroJornada from '@/components/jornada/CadastroJornada.vue';
import CardJornada from '@/components/jornada/CardJornada.vue';
import { atualizarStatusJornada, listarJornada } from '@/services/jornadaService';
import { onMounted, ref } from 'vue';

const mostrarCadastroJornada = ref(false)

const jornada = ref([])
    
onMounted(async () => {
    try {
        jornada.value = await listarJornada(1)
    } catch (error) {
        console.error(error)
    }
})

async function alterarStatusJornada(idSelecionado) {
    const selecionada = jornada.value.find(
        item => item.id === idSelecionado
    )

    if (!selecionada) return

    const novoStatus = Number(selecionada.is_ativo) !== 1

    try {

        for (const item of jornada.value) {
            const status = item.id === idSelecionado && novoStatus

            const resposta = await atualizarStatusJornada(
                item.id,
                status
            )

            if (!resposta || !resposta.status) {
                throw new Error('Erro ao atualizar jornada.')
            }
        }

        // Atualiza os estados locais somente após sucesso
        jornada.value.forEach(item => {
            item.is_ativo = item.id === idSelecionado && novoStatus
        })

    } catch (error) {
        console.error('Erro ao atualizar as jornadas:', error)
    }
}
</script>

<template>
    <main class="bg-[#F8FAFC] p-[30px] w-full min-h-full">
        <nav class="flex justify-between gap-[10px]"
            v-if="!mostrarCadastroJornada">
            <span class="text-[16px] text-texto-claro">Monte as etapas que a doadora percorre no aplicativo até o atendimento.</span>
            
            <button 
            @click="mostrarCadastroJornada = true"
            class="group bg-materna px-[16px] py-[8px] flex justify-center items-center rounded-[8px] gap-[8px] hover:bg-pink-50 hover:text-slate-600 transition-colors">
                <img class="h-[16px] w-[14px] transition-all group-hover:brightness-0 group-hover:opacity-60" src="@/assets/campanha/+.svg" alt="Icon de +">
                <p class="text-white group-hover:text-slate-600 font-medium text-[14px]">Nova jornada</p>
            </button>
        </nav>
        
        <Transition 
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0">
            <CadastroJornada
            v-if="mostrarCadastroJornada"
            @fechar="mostrarCadastroJornada = false"/>
        </Transition>
        
        <div class="flex flex-wrap gap-[25px] justify-center mt-[30px]">
            <CardJornada
            v-for="itensJornada in jornada"
            :key="itensJornada.id"
            :jornada="itensJornada"
            @alterar-status="alterarStatusJornada"/>
        </div>
        
    </main>
</template>