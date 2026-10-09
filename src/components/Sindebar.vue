<script setup>
// Primeiro a Estilizacao depois autonomiza
</script>

<template>
    <nav 
    class="w-xs h-screen p-5 bg-white flex flex-col justify-between ">
        <div class="flex flex-row items-center space-x-3">
            <img 
            class="h-20"
            src="../assets/logoMaterna.svg" 
            alt="Uma mãe segurando um bebe dormindo com chupeta, onde ambos estão com os olhos fechados">
            <div>
                <h3 class="text-[18px] font-bold text-slate-800 leading-tight">Materna</h3>
                <p class="text-[#64748B]">Painel institucional</p>
            </div>
        </div>

        <hr class="w-[100%] h-[3px] rounded my-6 border-0 border-t-2 border-gray-200 ">

        <ul class="space-y-2">

            <li class="w-full">
                <img src="" alt="">
                <RouterLink 
                to="/dashboard"
                class="flex items-center space-x-3 w-full rounded-xl px-4 py-3 text-slate-600 hover:bg-pink-50 transition-colors font-medium [&.router-link-exact-active]:bg-[#DE6771] [&.router-link-exact-active]:text-white" >
                    Dashboard
                </RouterLink>
            </li>

            <li class="w-full">
                <img src="" alt="">
                <p>Agenda</p>
            </li>

            <li class="w-full">
                <img src="" alt="">
                <p>Doadoras</p>
            </li>            

            <li class="w-full">
                <img src="" alt="">
                <p>jornadas</p>
            </li>

            <li class="w-full">
                <img src="" alt="">
                <p>Campanhas</p>
            </li>          

            <li class="w-full">
                <img src="" alt="">
                <p>Instituição</p>
            </li>            
            
        </ul>

        <hr class="w-[100%] h-[3px] rounded my-6 border-0 border-t-2 border-gray-200 ">
          <!-- aqui seria puxado pela api fazer depois-->
        <div class="flex flex-row items-center space-x-3">
            <img 
            class="h-20"
            src="../assets/logoMaterna.svg" 
            alt="Uma mãe segurando um bebe dormindo com chupeta, onde ambos estão com os olhos fechados">
            <div>
                <h3 class="text-[18px] font-bold text-slate-800 leading-tight">Materna</h3>
                <p class="text-[#64748B]">Painel institucional</p>
            </div>
        </div>
    </nav>
</template>