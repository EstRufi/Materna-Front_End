<script setup>
import { ref } from 'vue'

    const emit = defineEmits(['fechar'])

    const campoDescricao = ref(null)
    const campoDescricaoEtapa = ref(null)

    function textareaAlturaAjustada() {
        const campoD = campoDescricao.value
        const campoDE = campoDescricaoEtapa.value
        const alturaMaxima = 150
        const alturaMaximaE = 350

        campoD.style.height = '38px'
        campoDE.style.height = '100px'

        const altura = Math.min(campoD.scrollHeight, alturaMaxima)
        const alturaDE = Math.min(campoDE.scrollHeight, alturaMaximaE)

        campoD.style.height = `${altura}px`
        campoDE.style.height = `${alturaDE}px`

        campoD.style.overflowY =
            campoD.scrollHeight > alturaMaxima ? 'auto' : 'hidden'

        campoDE.style.overflowY =
            campoDE.scrollHeight > alturaMaximaE ? 'auto' : 'hidden'
    }

    const campoArquivo = ref(null)
    const arquivoSelecionado = ref(null)

    function abrirSeletorArquivo(){
        campoArquivo.value.click()
    }

    function selecionarArquivo(event){
        arquivoSelecionado.value = event.target.files[0]
    }

    function removerArquivo() {
    arquivoSelecionado.value = null
    campoArquivo.value.value = ''
}
</script>

<template>
    <article class="w-full mim-w-0 min-h-0 bg-white border-2 border-borda rounded-[12px] p-[24px]" >
        <header class="flex items-center justify-between mb-[16px]">
            <h1 class="text-[16px] font-bold">Nova jornada</h1>
            <button
            type="button"
            @click="emit('fechar')"
            aria-label="Fechar cadastro">
                <img src="@/assets/campanha/X.svg" alt="Icon de X">
            </button>
        </header>

        <hr class="border-0 border-t-2 border-[#F1F5F9]">

        <nav class="flex flex-col mt-[16px]">
            <div class="w-full grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-2">
                <div class="flex flex-col">
                    <span>Nome da jornada</span>
                    <input
                    type="text"
                    maxlength="50"
                    placeholder="Ex: Jornada padrão da doadora"
                    class="w-full h-[56px] px-[14px] py-[10px] text-texto-claro border border-borda rounded-[8px] focus:border-[#D1D5DB] focus:outline-none">
                </div>

                <div class="flex flex-col">
                    <span>Descrição</span>
                    <textarea 
                    ref="campoDescricao"
                    @input="textareaAlturaAjustada"
                    type="text"
                    placeholder="Breve resumo do objetivo"
                    class="leading-[35px] w-full h-[56px] text-texto-claro border border-borda focus:border-[#D1D5DB] focus:outline-none px-[14px] py-[10px] rounded-[8px] resize-none overflow-hidden"></textarea>
                </div>
            </div>

            <div class="w-full flex bg-[#F0F9FF]/20 flex-col items-center justify-center gap-1 border border-dashed border-[#7DD3FC] rounded-[8px] py-[20px] px-[16px] mt-[16px]">
                <p class="text-[#94A3B8] text-[12px] font-medium">Etapas ({{ 0 }})</p>
                <span class="text-[12px] text-[#64748B]">Adicione a primeira etapa abaixo.</span>
            </div>
        </nav>
        <main class="w-full flex flex-col min-w-0 mim-h-[661px] bg-[#F8FAFC]/50 border border-[#E2E8F0] p-[20px] mt-[16px] gap-[16px] rounded-[12px]">
            <p class="text-[14px] font-semibold">Adicionar etapa</p>
            <div class="flex flex-row flex-wrap gap-4">
                <div class="flex flex-col w-full max-w-[648px]">
                    <span class="text-[12px] font-medium">Título</span>
                    <input 
                    type="text"
                    placeholder="Ex: Conheça a doação"
                    maxlength="100"
                    class="w-full focus:outline-none bg-white border-2 border-[#E2E8F0] max-w-[1200px] h-[34px] px-[12px] py-[8px] rounded-[6px]">
                </div>
                <div class="flex flex-1 flex-col">
                    <span class="text-[12px] font-medium">Tipo</span>
                    <div class="bg-white border-2 border-[#E2E8F0] text-[12px] font-medium px-[12px] py-[8px] flex items-center  rounded-[6px] w-full h-[34px]">
                        <p>Opcional</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-[4px]">
                <span class="text-[12px] font-medium">Descrição</span>
                <textarea 
                ref="campoDescricaoEtapa"
                @input="textareaAlturaAjustada"
                type="text"
                placeholder="Breve resumo do objetivo"
                class="leading-[35px] w-full h-[150px] text-texto-claro border border-borda focus:border-[#D1D5DB] focus:outline-none px-[14px] py-[10px] rounded-[8px] resize-none overflow-hidden"></textarea>
                
            </div>

            <div class="w-full min-w-0 min-h-[65px] bg-white border border-borda flex items-center justify-between p-[12px] rounded-[8px]">
                <div class="flex gap-[8px]">
                    <img 
                    class="w-[20px] "
                    src="@/assets/jornada/calendarioRosa.svg" alt="Icon de Calendario">
                    <div class="flex flex-col">
                        <span class="text-[12px] font-semibold">Etapa Agendável</span>
                        <p class="text-[12px] text-[#94A3B8]">Permite que a doadora agende a data para esta etapa</p>
                    </div>
                </div>
                
                <div>bolinha</div>
            </div>

            <div class="w-full min-w-0 min-h-[65px] bg-white border border-borda flex items-center justify-between p-[12px] rounded-[8px]">
                <div class="flex gap-[8px]">
                    <img 
                    class="w-[20px] "
                    src="@/assets/jornada/calendarioRosa.svg" alt="Icon de Calendario">
                    <div class="flex flex-col">
                        <span class="text-[12px] font-semibold">Precisa de aprovação</span>
                        <p class="text-[12px] text-[#94A3B8]">Permite que o banco recusar uma etapa concluida</p>
                    </div>
                </div>
                
                <div>bolinha</div>
            </div>

            <div class="flex flex-col">
                <div class="flex flex-row items-end flex-wrap">
                    <span class="text-[12px] font-medium">Arquivo / Material da Instituição (PDF)</span>
                    <p class="text-[11px] text-[#94a3b8]">- Material complementar para leitura da doadora</p>
                </div>

                <div class="w-full min-w-0 min-h-[56px] flex-wrap p-[10px] gap-2 bg-white border-2 border-dashed border-[#E2E8F0] flex flex-row rounded-[8px] justify-between">
                    <div class="flex flex-col">
                        <span 
                        class="text-[12px] font-medium"
                        v-if="arquivoSelecionado">
                            {{ arquivoSelecionado.name }}
                        </span>
                        <span
                        class="text-[10px] text-[#94A3B8]"
                        v-if="arquivoSelecionado">
                            {{arquivoSelecionado.name.split('.').pop().toUpperCase()}} 
                            • 
                            {{ (arquivoSelecionado.size / (1024**2)).toFixed(2)}} MB 
                            • Anexado
                        </span>
                    </div>

                    <div class="flex flex-row items-center gap-[10px]">
                        <input
                        ref="campoArquivo" 
                        type="file"
                        accept=".pdf,.doc,.docx,.xls,.xlsx"
                        class="hidden"
                        @change="selecionarArquivo">

                        <button
                        class="text-[12px] text-materna flex flex-row"
                        type="button"
                        @click="abrirSeletorArquivo">
                            <img class="w-[14px]" src="@/assets/jornada/baixar.svg" alt="">
                            Adicionar
                        </button>

                        <button
                        type="button"
                        class="flex flex-row text-[12px] text-[#94A3B8]"
                        @click="removerArquivo">
                            <img class="w-[14px]" src="@/assets/jornada/lixo.svg" alt="">
                            Remover
                        </button>
                    </div>
                </div> 

                <hr class="my-4 border-0 border-t-2 border-gray-200 ">
            </div>
        </main>
    </article>
</template>