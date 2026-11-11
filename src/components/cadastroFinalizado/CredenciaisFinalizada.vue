<script setup>
import LateralCredenciais from './LateralCredenciais.vue';
import { ref } from 'vue';

const processo = ref(true)
const etapaAtual = ref(4)

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
    <div class="h-8 w-30 rounded-lg flex mt-14"
    style="background-color:#F5E6E9;">
    
    <span class="font-bold rounded-full text-xs 
        text-[12px] items-center px-5 mt-2" 
        style="color: #DE6B72;">
        ETAPA 4 DE 4
        </span>

    <!-- Dados -->
    </div>
            <span class="text-[12px] text-[#94A3B8] mt-20">
                Acesso e Confirmação
            </span>

        </div>


        <h1 class="text-[2rem] font-bold text-black text- mt-2">
            Criar conta institucional
        </h1>

        <p class="text-sm text-gray-600 text-[14px] mb-9">
            Crie sua senha de acesso seguro para o painel institucional e conclua o cadastro.
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
                4. Credenciais de Acesso
            </h1>
            <p class="text-[12px] text-[#64748B]">
                Defina as credenciais para gerenciar a conta da unidade no ConectaLeite.
            </p>
        </div>

            <!--Formulário/ E-mail-->
            <div class="w-full min-w-[520px] text-left px-36 mb-3">
                <div class="flex flex-col gap-2 font-semibold">

                    <label class="text-[14px] text-gray-700">
                       E-mail de Acesso
                    </label>

                    <input 
                    type="text"
                    placeholder="Ex: contato@bancodeleite.org.br"
                    class="h-[40px] w-160 rounded-md border border-gray-300 
                    bg-white px-3 text-[14px] text-gray-700
                    outline-none border-gray-300 focus:border-[#D1D5DB]">
                </div>
            </div>

            <!-- Formulário/Senha -->
             <div class="w-[960px] flex justify-between gap-1">

                <div class="w-1/2 space-y-2 text-left px-36 mb-2">
                    <div class="flex flex-col gap-1">
                        <label class="text-[14px] text-gray-700 font-semibold">
                            Criar Senha
                        </label>

                        <input 
                        type="text"
                        placeholder="Mínimo 8 caracteres"
                        class="h-[40px] w-76 rounded-md border border-gray-300 
                        bg-white px-3 text-[14px] text-gray-700
                        outline-none border-gray-300 focus:border-[#D1D5DB]">
                    </div>
                </div>

             
                <div class="w-1/2 justify-between text-left mb-1">
                    <div class="flex flex-col gap-1">
                        <label class="text-[14px] text-gray-700 font-semibold">
                            Confirmar Senha
                        </label>

                        <input 
                        type="text"
                        placeholder="Repita a senha"
                        class="h-[40px] w-76 rounded-md border border-gray-300 
                        bg-white px-3 text-[14px] text-gray-700
                        outline-none border-gray-300 focus:border-[#D1D5DB]">
                    </div>
                </div>
            </div>

        <!-- Requisitos -->
        <div class="w-160 rounded-xl border border-[#E2E8F0]/80 bg-[#E2E8F0]/10 p-3 mb-4 mt-4">

            <p class="text-[#334155] text-[12px] font-bold mb-2">
                Requisitos de segurança:
            </p>

            <div class="flex items-center gap-2 flex-wrap">

                <span class="flex items-center gap-2 rounded-md border border-[#DE6B72]
                bg-[#DE6B72]/10 px-2 py-1 text-[11px] text-[#DE6B72]">

                <img 
                    src="/src/assets/credenciais/CorretoRosa.svg" 
                    alt="Correto" 
                    class="h-3 w-3 object-contain">

                Mínimo 8 dígitos
                </span>

                <span class="flex items-center gap-2 rounded-md border border-[#DE6B72]
                bg-[#DE6B72]/10 px-2 py-1 text-[11px] text-[#DE6B72]">

                <img 
                    src="/src/assets/credenciais/CorretoRosa.svg" 
                    alt="Correto" 
                    class="h-3 w-3 object-contain">

                1 letra maiúscula
                </span>

                <span class="flex items-center gap-2 rounded-md border border-[#DE6B72]
                bg-[#DE6B72]/10 px-2 py-1 text-[11px] text-[#DE6B72]">

                <img 
                    src="/src/assets/credenciais/CorretoRosa.svg" 
                    alt="Correto" 
                    class="h-3 w-3 object-contain">

                1 número ou símbolo
                </span>

            </div>

        </div>

        <!--Resumo-->

        <div class="w-160 rounded-xl border border-[#DE6B72]/20 bg-[#DE6B72]/10 p-3 mb-4">

            <h1  class="text-[12px] text-[#DE6B72] font-bold">
            Resumo da Instituição
            </h1>

            <p class="text-[11px] text[#334155]">
                Banco de Leite Humano Santa Clara • CNPJ 00.000.000/0001-00 • Resp: Dra. Mariana
                Silva
            </p>

        </div>


           <!-- Botões -->
           <div class=" flex w-full justify-between items-center">

        <div class="justify-between px-36">
            <button class="w-34 h-[48px] rounded-md 
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

            <div class="justify-between px-34">
                <button class="w-48 h-[48px] rounded-md 
                bg-[#DE6B72] justify-center flex items-center 
                text-sm text-white hover:opacity-30 transition gap-3">

                <span class="text-white text-[16px] flex justify-end top-1/2 -translate-y-1/2 mt-6 gap-4">
                    Finalizar cadastro
                </span>

                <img 
                src="/src/assets/cadastro/Seta2.svg" 
                alt="Seta2" 
                class="w-4 h-3 object-contain">

                </button>
            </div>

        </div>

        <div class="w-full px-36 mt-7">
            <div class="h-px w-190 bg-gray-100 mb-3 "></div>
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