<script setup>
import { ref } from 'vue';

    const emit = defineEmits(['fechar'])

    const descricaoT = ref('')
    const descricaoD = ref('')
    const campoTitulo = ref(null)
    const campoDescricao = ref(null)

    function textareaAlturaAjustada() {
        const campoT = campoTitulo.value
        const campoD = campoDescricao.value

        campoT.style.height = '38px'
        campoT.style.height = `${campoT.scrollHeight}px`

        campoD.style.height = '77px'
        campoD.style.height = `${campoD.scrollHeight}px`
    }
</script>

<template>
    <article class="p-[20px] w-full mim-w-[1086px] min-h-[401px] bg-white border-2 border-borda rounded-[12px]">
        <header class="flex justify-between mb-[24px]">
            <h1 class="text-[16px] font-bold">Nova campanha</h1>
            <button
            type="button"
            @click="emit('fechar')"
            aria-label="Fechar cadastro">
                <img src="@/assets/campanha/X.svg" alt="Icon de X">
            </button>
            
        </header>

        <section class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_276px] gap-4">
            <div class="w-full min-w-0 flex flex-col gap-3">
                
                <div class="flex flex-col gap-1">
                    <label class="text-[14px]">Titulo</label>
                    <textarea 
                    ref="campoTitulo"
                    v-model="descricaoT"
                    @input="textareaAlturaAjustada"
                    placeholder="Semana do Leite Humano" class="leading-[20px] w-full h-[38px] border border-[#D1D5DB] focus:border-[#D1D5DB] focus:outline-none px-[12px] py-[10px] rounded-[6px] resize-none overflow-hidden ">
                    </textarea>
                </div>
                    
                
                <div class="flex flex-col gap-1">
                    <label class="text-[14px]">Descrição</label>
                    <textarea 
                    ref="campoDescricao"
                    v-model="descricaoD"
                    @input="textareaAlturaAjustada"
                    placeholder="Sobre a campanha" class="leading-[20px] w-full h-[77px] border border-[#D1D5DB] focus:border-[#D1D5DB] focus:outline-none px-[12px] py-[10px] rounded-[6px] resize-none overflow-hidden ">
                    </textarea>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div class="flex flex-col gap-1 min-w-0">
                        <label class="text-[14px]">Inicio</label>
                        <input type="date"  class="w-full min-w-0 text-texto-claro focus:outline-none px-[12px] py-[10px] rounded-[6px] border border-[#D1D5DB] focus:border-[#D1D5DB]">
                    </div>

                    <div class="flex flex-col gap-1 min-w-0">
                        <label class="text-[14px]">Término</label>
                        <input type="date" class="w-full min-w-0 text-texto-claro  focus:outline-none px-[12px] py-[10px] rounded-[6px] border border-[#D1D5DB] focus:border-[#D1D5DB]">
                    </div>
                </div>
            </div>

            <div class="w-full min-w-0 flex flex-col gap-5">
                <div class="w-full min-h-[232px] bg-[#FDF4F4]/60 px-[20px] py-[33px] flex flex-col gap-[12px] justify-center items-center rounded-[16px] border-2 border-dashed border-[#FCA5A5]">
                    <div class=" w-[56px] h-[56px] bg-[#FBE9E9] flex justify-center rounded-full">
                        <img class="w-[28px]"
                        style="filter: brightness(0) saturate(100%) invert(53%) sepia(19%) saturate(1300%) hue-rotate(315deg) brightness(90%) contrast(90%);"
                        src="@/assets/sindebar/campanha.svg" alt="icon de auto-falante">
                    </div>
                    <button 
                    class="w-full max-w-[213px] h-[32px] bg-[#E68784] text-[12px] text-white px-[16px] py-[8px] rounded-[12px]"
                    >Adicionar Imagem</button>
                </div>
                <div class="flex-wrap gap-2 flex justify-between mt-5">
                    <button
                    class="w-[87px] h-[36px] px-[16px] py-[8px] bg-[#DE6B72]/10 text-[#374151] text-[14px] rounded-[6px]"
                    @click="emit('fechar')">Cancelar</button>
                    <button
                    class="h-[36px] px-[16px] py-[8px] bg-materna text-white text-[14px] rounded-[6px]"
                    >Publicar campanha</button>
                </div>
            </div>
        </section>
    </article>
</template>