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

    const dataCampo = ref('')
</script>

<template>
    <article class="p-[20px] w-full mim-w-[1086px] h-full min-h-[401px] bg-white border-2 border-borda rounded-[12px]">
        <header class="flex justify-between mb-[24px]">
            <h1 class="text-[16px] font-bold">Nova campanha</h1>
            <button
            type="button"
            @click="emit('fechar')"
            aria-label="Fechar cadastro">
                <img src="@/assets/campanha/X.svg" alt="Icon de X">
            </button>
            
        </header>

        <section class="flex gap-2 justify-between flex-wrap">
            <div class="w-full max-w-[767px] flexflex-col gap-3">
                
                    <label class="text-[14px]">Titulo</label>
                    <textarea 
                    ref="campoTitulo"
                    v-model="descricaoT"
                    @input="textareaAlturaAjustada"
                    placeholder="Semana do Leite Humano" class="leading-[20px] w-full h-[38px] border border-[#D1D5DB] focus:border-[#D1D5DB] focus:outline-none px-[12px] py-[10px] rounded-[6px] resize-none overflow-hidden ">
                    </textarea>
                

                
                    <label class="text-[14px]">Descrição</label>
                    <textarea 
                    ref="campoDescricao"
                    v-model="descricaoD"
                    @input="textareaAlturaAjustada"
                    placeholder="Sobre a campanha" class="leading-[20px] w-full h-[77px] border border-[#D1D5DB] focus:border-[#D1D5DB] focus:outline-none px-[12px] py-[10px] rounded-[6px] resize-none overflow-hidden ">
                    </textarea>
                

                <div class="flex justify-between flex-wrap">
                    <div class="flex flex-col">
                        <label class="text-[14px]">Inicio</label>
                        <input type="date"  class="text-texto-claro focus:outline-none px-[12px] py-[10px] rounded-[6px] border border-[#D1D5DB] focus:border-[#D1D5DB]">
                    </div>

                    <div class="flex flex-col ">
                        <label class="text-[14px]">Término</label>
                        <input type="date" class="text-texto-claro  focus:outline-none px-[12px] py-[10px] rounded-[6px] border border-[#D1D5DB] focus:border-[#D1D5DB]">
                    </div>
                </div>
            </div>

            <div class="min-h-[311px] bg-black w-full max-w-[276px]">aa</div>
        </section>
    </article>
</template>