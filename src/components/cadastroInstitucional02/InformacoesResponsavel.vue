<script setup>
import { ref } from 'vue';

const processo = ref(true)
const etapaAtual = ref(2)

const etapa = [
    'Instituicao',
    'Responsável',
    'Local&Horário',
    'Acesso'
]
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
                        ETAPA 2 DE 4
                        </span>

                <!-- Dados -->
                </div>
                        <span class="text-[12px] text-[#94A3B8] mt-20">
                            Dados da Instituição
                        </span>

                    </div>


                <h1 class="text-[28px] font-bold text-black text- mt-2">
                    Criar conta institucional
                </h1>

                <p class="text-sm text-gray-600 text-[14px] mb-9">
                    Preencha os dados do responsável legal ou técnico pela unidade.
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
                            :class="index === 2 ? 'bg-transparent' : 'bg-gray-300'">
                        </div>

                    </div>

            <p class="mt-2 whitespace-nowrap text-[12px] text-[#DE6B72] font-bold mb-2">
                {{ etapa }}
            </p>

        </div>
        </div>

            <!--Informacoes-->
        <div class="items-center px-36 mb-4">
            <h1 class="text-[14px] font-bold text-black">
                2. Informações do Responsável
            </h1>
            <p class="text-[12px] text-[#64748B]">
                Dados da pessoa física gestora ou técnica responsável pela conta da unidade.</p>
        </div>

            <!--Responsavel/ Nome-->
            <div class="w-full min-w-[520px] text-left px-36 mb-4">
                <div class="flex flex-col gap-1">

                    <label class="text-[14px] font-medium text-gray-700">
                        Nome completo do responsável                    
                    </label>

                    <input 
                    type="text"
                    placeholder="Ex: Dra. Mariana Vasconcelos Silva"
                    class="h-[47px] w-160 rounded-md border border-gray-300 
                    bg-white px-3 text-[14px] text-gray-700
                    outline-none border-gray-300 focus:border-[#D1D5DB]">
                </div>
            </div>

            <!-- Formulário/CPF -->
            <div class="w-full flex gap-2 px-36">

                <div class="w-full text-left mb-4 ">
                    <div class="flex flex-col ">
                        <label class="text-[14px] font-medium text-gray-700">
                            CPF
                        </label>

                        <input 
                        type="text"
                        placeholder="000.000.000-00"
                        class="h-[47px] w-80 rounded-md border border-gray-300 
                        bg-white px-3 text-[14px] text-gray-700
                        outline-none border-gray-300 focus:border-[#D1D5DB]">
                    </div>
                </div>

                <!--Formulário/Data de Nascimento-->
                <div class="w-full text-left mb-4">
                    <div class="flex flex-col ">
                        <label class="text-[14px] font-medium text-gray-700">
                            Data de Nascimento
                        </label>

                        <input 
                        type="text"
                        placeholder="DD/MM/AAAA"
                        class="h-[47px] w-79 rounded-md border border-gray-300 
                        bg-white px-3 text-[14px] text-gray-700
                        outline-none border-gray-300 focus:border-[#D1D5DB]">
                    </div>
                </div>
            </div>

            <!-- Formulário/Telefone -->
            <div class="w-full whitespace-nowrap space-y-4 px-36 mb-4">
                <div class="flex flex-col">
                    <label class="text-[14px] font-medium text-gray-700">
                        Telefone / WhatsApp
                    </label>

                    <input 
                    type="text"
                    placeholder="(11) 98765-4321"
                    class="h-[47px] w-160 rounded-md border border-gray-300 
                    bg-white px-3 text-[14px] text-gray-700
                    outline-none border-gray-300 focus:border-[#D1D5DB]">
                </div>
            </div>

            <!-- Email/Telefone -->
            <div class="w-full whitespace-nowrap space-y-4 px-36 mb-4">
                <div class="flex flex-col gap-1">
                    <label class="text-[14px] font-medium text-gray-700">
                        E-mail do responsável
                    </label>

                    <input 
                    type="text"
                    placeholder="mariana.silva@bancodeleite.org.br"
                    class="h-[47px] w-160 rounded-md border border-gray-300 
                    bg-white px-3 text-[14px] text-gray-700
                    outline-none border-gray-300 focus:border-[#D1D5DB]">
                </div>
            </div>

        <div class="w-full px-36 mt-7">
            <div class="h-px w-160 bg-gray-100 mb-7 "></div>
        </div>

           <!-- Botões -->
            <div class=" flex w-full justify-between items-center">

                <div class="justify-between px-36">
                    <button class="w-38 h-[48px] rounded-md 
                    bg-[#FFFFFF] justify-center flex items-center 
                    text-sm font-medium text-white hover:opacity-30 transition 
                    border border-gray-300 gap-3 ">

                    <img 
                    src="/src/assets/InformacoesResponsavel/voltar.svg" 
                    alt="voltar" 
                    class="w-4 h-4 object-contain">

                    <span class="text-black text-[16px] flex justify-end top-1/2 -translate-y-1/2 mt-6 gap-4">
                        Voltar
                    </span>

                    </button>
                </div>

            <div class="justify-between px-36">
                <button class="w-38 h-[48px] rounded-md 
                bg-[#DE6B72] justify-center flex items-center 
                text-sm font-medium text-white hover:opacity-30 transition gap-3">

                <span class="text-white text-[16px] flex justify-end top-1/2 -translate-y-1/2 mt-6 gap-4">
                    Avançar
                </span>
                
                <img 
                src="/src/assets/cadastro/Seta2.svg" 
                alt="Seta2" 
                class="w-4 h-3 object-contain">
                
                </button>
            </div>

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
