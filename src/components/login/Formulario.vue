<script setup>
import LateralInformativo from './LateralInformativo.vue';


</script>
<template>
    <div class="w-full min-h-screen flex flex-col items-center justify-items-center px-20 gap-3 text-left pr-10 mt-60">

        
        
        <!-- Header -->
         <div class="mb-7 w-full max-w-[360px]">
            <div class="flex h-8 w-38 rounded-full flex items-center px-4"
                style="background-color: #F5E6E9;">

                <img 
                src="@/assets/telaLogin/Shield.svg" 
                alt="Escudo"
                class="w-4 h-4 object-contain">

                <span class="font-normal text-xs"
                    style="color: #DE6B72;">
                        Acesso institucional
                </span>
            </div>

            <h1 class="text-[30px] font-bold text-black-600">
                Acesso ao painel
            </h1>
            <p class="text-sm text-gray-600">
                Insira suas credenciais para continuar 
            </p>
        </div>
            
        <!-- Email -->
        <div class="w-90 max-w-[360px] space-y-4">
            <div class="flex flex-col gap-1">
                <label class="text-[10px] text gray-700">
                    E-mail
                </label>

                <input 
                type="email"
                placeholder="seu@email.com.br"
                class="h-[34px] w-full rounded-md border border-gray-300 
                bg-white px-3 text-[11px] text-gray-700
                 outline-none border-gray-300 focus:border-[#D1D5DB]"/>
            </div>

            <!--Senha-->
            <div class="w-90 max-w-[360px] space-y-4">
                <label class="text-[10px] text gray-700">
                    Senha
                </label>

                <input 
                type="senha"
                placeholder="..........."
                class="h-[34px] w-full rounded-md border border-gray-300 
                bg-white px-3 text-[11px] text-gray-700
                 outline-none border-gray-300 focus:border-[#D1D5DB]"/>
            </div>

            <div>
                <a 
                href="#"
                class="text-[10px] text-[#DE6B72] houver:underline"
                >
                Esqueci minha senha
            </a>
            
            <!--Botão-->
            </div>
            <button class="w-full h-10 rounded-md bg-[#DE6B72]
            text-sm font-medium text-white houver:opacity-90 transition"
            >
            Entrar
            </button>

            <div>
                <p class="text-xs text-[#D1D5DB] ">
                    Problemas de acesso? Fale com o administrador da plataforma.
                </p>
            </div>

        </div>
    </div>
</template>