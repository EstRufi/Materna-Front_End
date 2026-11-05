<script setup>
import { reactive, ref } from 'vue';
import {urlDaImagem} from '@/composable/urlDaImagem.js'
import { cadastrarCampanha } from '@/services/campanhaService';

    const emit = defineEmits(['fechar'])

    const campoTitulo = ref(null)
    const campoDescricao = ref(null)

    function textareaAlturaAjustada() {
        const campoT = campoTitulo.value
        const campoD = campoDescricao.value

        campoT.style.height = '38px'
        campoT.style.height = `${campoT.scrollHeight}px`

        campoD.style.height = '77px'
        campoD.style.height = `${campoD.scrollHeight}px`

        const alturaMaxima = 250

        campoD.style.height = `${Math.min(campoD.scrollHeight, alturaMaxima)}px`

        campoD.style.overflowY =
            campoD.scrollHeight > alturaMaxima ? 'auto' : 'hidden'
    }

    const {
        campoArquivo,
        arquivoImagem,
        previewImagem,
        abrirSeletorImagem,
        receberImagem,
        soltarImagem,
        enviarImagem
    } = urlDaImagem()

    const formulario = reactive({
        titulo:'',
        descricao: '',
        dataInicio:'',
        dataFim:''
    })

    async function publicarCampanha() {
    try {
        const foto = await enviarImagem()

        const hoje = new Date()
        const dataHoje = [
            hoje.getFullYear(),
            String(hoje.getMonth() + 1).padStart(2, '0'),
            String(hoje.getDate()).padStart(2, '0')
        ].join('-')

        const dadosCampanha = {
            titulo: formulario.titulo,
            descricao: formulario.descricao,
            foto: foto,
            data_inicio: formulario.dataInicio,
            data_fim: formulario.dataFim,
            is_ativo: dataHoje >= formulario.dataInicio &&
                      dataHoje <= formulario.dataFim,
            id_instituicao: 1, // ID temporário para teste
            id_funcionario: 1  // ID temporário para teste
        }

        const resposta = await cadastrarCampanha(dadosCampanha)

        console.log('Campanha cadastrada:', resposta)

        window.location.reload()

    } catch (erro) {
        console.error('Erro ao publicar campanha:', erro)
    }
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
                    v-model="formulario.titulo"
                    @input="textareaAlturaAjustada"
                    placeholder="Semana do Leite Humano" class="leading-[20px] w-full h-[38px] border border-[#D1D5DB] focus:border-[#D1D5DB] focus:outline-none px-[12px] py-[10px] rounded-[6px] resize-none overflow-hidden ">
                    </textarea>
                </div>
                    
                
                <div class="flex flex-col gap-1">
                    <label class="text-[14px]">Descrição</label>
                    <textarea 
                    ref="campoDescricao"
                    v-model="formulario.descricao"
                    @input="textareaAlturaAjustada"
                    placeholder="Sobre a campanha" class="leading-[20px] w-full h-[77px] border border-[#D1D5DB] focus:border-[#D1D5DB] focus:outline-none px-[12px] py-[10px] rounded-[6px] resize-none overflow-hidden ">
                    </textarea>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div class="flex flex-col gap-1 min-w-0">
                        <label class="text-[14px]">Inicio</label>
                        <input 
                        type="date"
                        min="0001-01-01"
                        max="9999-12-31" 
                        v-model="formulario.dataInicio" 
                        class="w-full min-w-0 text-texto-claro focus:outline-none px-[12px] py-[10px] rounded-[6px] border border-[#D1D5DB] focus:border-[#D1D5DB]">
                    </div>

                    <div class="flex flex-col gap-1 min-w-0">
                        <label class="text-[14px]">Término</label>
                        <input 
                        type="date"  v-model="formulario.dataFim" class="w-full min-w-0 text-texto-claro  focus:outline-none px-[12px] py-[10px] rounded-[6px] border border-[#D1D5DB] focus:border-[#D1D5DB]">
                    </div>
                </div>
            </div>

            <div class="w-full min-w-0 flex flex-col gap-5">
                <div
                class="relative w-full min-h-[232px] bg-[#FDF4F4]/60 rounded-[16px] border-2 border-dashed border-[#FCA5A5] overflow-hidden flex flex-col justify-center items-center"
                @dragover.prevent
                @drop.prevent="soltarImagem">

                    <input
                        ref="campoArquivo"
                        type="file"
                        accept="image/png, image/jpeg, image/webp"
                        class="hidden"
                        @change="receberImagem($event.target.files[0])"
                    >

                    <div
                    v-if="!previewImagem"
                    class="flex flex-col items-center gap-3 p-5">
                        <div class="w-[56px] h-[56px] bg-[#FBE9E9] flex justify-center items-center rounded-full">
                            <img
                                class="w-[28px]"
                                src="@/assets/sindebar/campanha.svg"
                                alt="Ícone de megafone"
                            >
                        </div>

                        <p class="text-[12px] text-texto-claro">
                            Arraste uma imagem até aqui
                        </p>

                        <button
                        type="button"
                        @click="abrirSeletorImagem"
                        class="w-full max-w-[213px] h-[32px] bg-[#E68784] text-[12px] text-white rounded-[12px]">
                            Adicionar Imagem
                        </button>
                    </div>

                    <div v-else class="absolute inset-0">
                        <img
                        :src="previewImagem"
                        class="w-full h-full object-cover"
                        alt="Pré-visualização da campanha">

                        <button
                        type="button"
                        @click="abrirSeletorImagem"
                        class="absolute bottom-3 left-1/2 -translate-x-1/2 bg-materna/90 text-white text-[12px] px-4 py-2 rounded-lg">
                            Trocar imagem
                        </button>
                    </div>
                </div>

                <div class="flex-wrap gap-2 flex justify-between mt-5">
                    <button
                    class="w-[87px] h-[36px] px-[16px] py-[8px] bg-[#DE6B72]/10 text-[#374151] text-[14px] rounded-[6px]"
                    @click="emit('fechar')">Cancelar</button>
                    <button
                    @click="publicarCampanha"
                    class="h-[36px] px-[16px] py-[8px] bg-materna text-white text-[14px] rounded-[6px]"
                    >Publicar campanha</button>
                </div>
            </div>
        </section>
    </article>
</template>