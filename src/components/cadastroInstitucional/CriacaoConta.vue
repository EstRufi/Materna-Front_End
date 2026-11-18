<script setup>
import LateralCadastro from './LateralCadastro.vue';
import InformacaoEndereco from '../cadastroInstitucional03/InformacaoEndereco.vue';
import { ref } from 'vue';
import InformacoesResponsavel from '../cadastroInstitucional02/InformacoesResponsavel.vue';

const processo = ref(true)
const etapaAtual = ref(1)

const etapa = [
    'Instituicao',
    'Responsável',
    'Local&Horário',
    'Acesso'
]
const avancar = () => {

    if(etapaAtual.value < 4){
        etapaAtual.value++
    }
}

const voltar = () => {

    if(etapaAtual.value < 1){
        etapaAtual.value--
    }
}

</script>
<template>
    
    <div class="mb-7 w-full text-left px-34">

<div class="w-full flex items-center justify-between">

    <!-- Etapas -->
    <div class="h-8 w-30 rounded-lg flex mt-24"
    style="background-color:#F5E6E9;">
    
    <span class="font-bold rounded-full text-xs 
        text-[12px] items-center px-5 mt-2" 
        style="color: #DE6B72;">
        ETAPA 1 DE 4
        </span>

    <!-- Dados -->
    </div>
            <span class="text-[12px] text-[#94A3B8] mt-20">
                Dados da Instituição
            </span>

        </div>


        <h1 class="text-[2rem] font-bold text-black text- mt-2">
            Criar conta institucional
        </h1>

        <p class="text-sm text-gray-600 text-[14px] mb-9">
            Crie sua senha de acesso seguro para o painel institucional.
        </p>


    </div>

        <!--Indica de etapas-->
        <div v-if="processo" class="mb-8 flex w-full max-w-[960px] px-20">

            <div
                v-for="(etapa, index) in ['Instituição', 'Responsável', 'Local e Horário', 'Acesso']"
                :key="index"
                class="flex flex-1 flex-col items-center">


                <div class="flex w-full items-center">

                    <div
                        class="h-[1px] flex-1"
                        :class="index === 0 ? 'bg-traslate' : 'bg-gray-300 '">
                    </div>

                    <div
                        class="relative z-10 shrick-0 flex h-8 w-8 items-center justify-center rounded-full text-xs"
                        :class="index + 1 <= etapaAtual
                            ? 'bg-[#DE6B72] text-white'
                            : 'border border-gray-300 bg-white text-gray-400'">
                        {{ index + 1 }}
                    </div>

                    <div
                        class="h-[1px] flex-1"
                        :class="index === 3 ? 'bg-transparent' : 'bg-gray-300'">
                    </div>

                </div>

                <p class="mt-2 whitespace-nowrap text-[12px] text-[#DE6B72] font-bold mb-2">
                    {{ etapa }}
                </p>

            </div>
        </div>

            <!--Informacoes-->
        <div class="items-center px-38 mb-5">
            <h1 class="text-[16px] font-bold text-black">
                1. Informações Institucionais
            </h1>
            <p class="text-[12px] text-[#64748B]">
                Insira a razão social e dados corporativos da entidade de saúde.
            </p>
        </div>

            <!--Formulário/ Nome-->
            <div class="w-full min-w-[520px] text-left px-38 mb-3">
                <div class="flex flex-col gap-2 font-semibold">

                    <label class="text-[14px] text-gray-700">
                        Nome da instituição / Razão Social
                    </label>

                    <input 
                    type="text"
                    placeholder="Ex: Banco de Leite Humano Santa Clara"
                    class="h-[40px] w-160 rounded-md border border-gray-300 
                    bg-white px-3 text-[14px] text-gray-700
                    outline-none border-gray-300 focus:border-[#D1D5DB]">
                </div>
            </div>

            <!-- Formulário/CNPJ -->
            <div class="w-full space-y-4 text-left px-38 mb-3">
                <div class="flex flex-col gap-2">
                    <label class="text-[14px] text-gray-700 font-semibold">
                        CNPJ
                    </label>

                    <input 
                    type="text"
                    placeholder="00.000.000/0001-00"
                    class="h-[40px] w-160 rounded-md border border-gray-300 
                    bg-white px-3 text-[14px] text-gray-700
                    outline-none border-gray-300 focus:border-[#D1D5DB]">
                </div>
            </div>

              <!--Formulário/E-mail-->
            <div class="w-full space-y-4 text-left px-38 mb-3">
                <div class="flex flex-col gap-2">
                    <label class="text-[14px] text-gray-700 font-semibold">
                        E-mail institucional oficial
                    </label>

                    <input 
                    type="text"
                    placeholder="contato@bancodeleite.org.br"
                    class="h-[40px] w-160 rounded-md border border-gray-300 
                    bg-white px-3 text-[14px] text-gray-700
                    outline-none border-gray-300 focus:border-[#D1D5DB]">
                </div>
            </div>

            <!-- Formulário/Telefone -->
            <div class="w-full whitespace-nowrap space-y-4 px-38 mb-3">
                <div class="flex flex-col gap-2">
                    <label class="text-[14px] text-gray-700 font-semibold">
                        Telefone fixo / Recepção E-mail institucional oficial
                    </label>

                    <input 
                    type="text"
                    placeholder="(11) 3214-5678"
                    class="h-[40px] w-160 rounded-md border border-gray-300 
                    bg-white px-3 text-[14px] text-gray-700
                    outline-none border-gray-300 focus:border-[#D1D5DB]">
                </div>
            </div>

        <div class="w-full px-36 mt-7">
            <div class="h-px w-160 bg-gray-100 mb-7 "></div>
        </div>

           <!-- Botão -->
            <div 
            @click="avancar"
            class="text-left px-160 flex-col ">
                <button class="relative w-38 h-[48px] rounded-md 
                bg-[#DE6B72] justify-center flex items-center 
                text-sm font-medium text-white hover:opacity-30 transition">

                <span class="text-white text-[16px] flex justify-end top-1/2 -translate-y-1/2 mt-6 gap-4">
                    Avançar
                </span>
                
                <img 
                src="/src/assets/cadastro/Seta2.svg" 
                alt="Seta2" 
                class="w-4 h-3 object-contain shrink-0 object-contain ">
                
                </button>

            </div>

             <div class="w-full px-36 mt-7">
                <div class="h-px w-160 bg-gray-100 mb-3 "></div>
            </div>


            <div class="w-full flex items- justify-center gap-1 mt-4">
                <p class="whitespace-nowrap text-xs text-black/60 text-[14px]">
                    Já possui uma conta institucional? 
                </p>

                <a href="#" class="text-[15px] text-[#DE6B72] 
                            font-semibold hover:underline">
                    Entrar
                </a>

            </div>
            
</template>