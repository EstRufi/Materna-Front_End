<script setup>
import LateralCadastro from './LateralCadastro.vue';

</script>
<template>
    <div class="mb-7 w-full max-w-[360px]">
        <div class="flex h-10 w-27 rounded-8 flex items-center"
        style="background-color:#F5E6E9;">
        
        <span class="font-bold text-xs text-[14px]" 
            style="color: #DE6B72;">
            ETAPA 1 DE 4
            </span>
        </div>

        <h1 class="text-[30px] font-bold text black-600">
            Criar conta institucional
        </h1>
        <p class="text-sm text-gray-600">
            Crie sua senha de acesso seguro 
            para o painel institucional.
        </p>
    </div>

    <!-- Indica de etapas -->
    <div 
        v-if="processo"
        class="w-full flex items-start">

        <div 
        v-for="(etapa, index) in [Instituicao,Responsavel, Local&Horario, Acesso]"
        :key="index"
        class="flex flex-1 flex-col items-center">

            <div class="flex w-full items-center">
                <div class="h-px flex-1" 
                    :class="index === 0 ? 'bg-transparent' : 'bg-gray-300'">
                </div>

                    <div class="h-6 w-6 rounded-full flex flex-center justify-center text-[10px]"
                        :class="index + 1 <= etapaAtual ? 'bg-[#DE6B72] text-white'
                        : 'bg-white border borderr-gray-300 text-gray-400'"
                        >
                        {{ index + 1 }}
                    </div>
            </div>

            <div 
                class="h-px flex-1"
                :class="index + 1 < 4 ? 'bg-gray-300' : 'bg-transparent'">
            </div>

            <div>
                <p 
                    class="mt-2 text-=[9px] whitwspace-nowrap" 
                    :class="index + 1 === etapaAtual
                    ? 'text-[#DE6B72]'
                    : 'text-gray-400'">

                    {{ etapa }}
                </p>     
            </div>

            <div class="mb-7 w-full max-w-[360px]">
                <h2 class="text-blak-600 text-[30px] font-bold">
                    1. Informações Institucionais
                </h2>
                <p class="text-sm text-gray-600">
                    Insira a razão social e dados 
                    corporativos da entidade de saúde.
                </p>
            </div>

            <!--Formulário/ Nome-->
            <div class="w-90 max-w-[520px] space-y-4">
                <div class="flex flex-col gap-1">
                    <label class="text-[14px] text-gray-700">
                        Nome da instituição / Razão Social
                    </label>

                    <input 
                    type="text"
                    placeholder="Ex: Banco de Leite Humano Santa Clara"
                    class="h-[40px] w-120 rounded-md border border-gray-300 
                    bg-white px-3 text-[14px] text-gray-700
                    outline-none border-gray-300 focus:border-[#D1D5DB]">
                </div>
            <!-- Formulário/CNPJ -->
            <div class="w-90 max-w-[520px] space-y-4">
                <div class="flex flex-col gap-1">
                    <label class="text-[14px] text-gray-700">
                        CNPJ
                    </label>

                    <input 
                    type="text"
                    placeholder="00.000.000/0001-00"
                    class="h-[40px] w-120 rounded-md border border-gray-300 
                    bg-white px-3 text-[14px] text-gray-700
                    outline-none border-gray-300 focus:border-[#D1D5DB]">
                </div>
            </div>

              <!--Formulário/E-mail-->
              <div class="w-90 max-w-[520px] space-y-4">
                <div class="flex flex-col gap-1">
                    <label class="text-[14px] text-gray-700">
                        E-mail institucional oficial
                    </label>

                    <input 
                    type="text"
                    placeholder="contato@bancodeleite.org.br"
                    class="h-[40px] w-120 rounded-md border border-gray-300 
                    bg-white px-3 text-[14px] text-gray-700
                    outline-none border-gray-300 focus:border-[#D1D5DB]">
                </div>
            </div>

            <!-- Formulário/Telefone -->
            <div class="w-90 max-w-[520px] space-y-4">
                <div class="flex flex-col gap-1">
                    <label class="text-[14px] text-gray-700">
                        Telefone fixo / Recepção E-mail institucional oficial
                    </label>

                    <input 
                    type="text"
                    placeholder="(11) 3214-5678"
                    class="h-[40px] w-120 rounded-md border border-gray-300 
                    bg-white px-3 text-[14px] text-gray-700
                    outline-none border-gray-300 focus:border-[#D1D5DB]">
                </div>
            </div>

            <!-- Botão -->
             <div>
                <button class="w-120 h-10 rounded-md bg-[#DE6B72]
            text-sm font-medium text-white houver:opacity-90 transition">
            Avançar
                </button>

                <div class="w-102 flex justify-end">
                    <p class="text-xs text-[#D1D5DB] mt-2">
                        Já possui uma conta institucional? 
                    </p>

                </div>
             </div>
            </div>
        </div>
    </div>
</template>