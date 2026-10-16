<script setup>
// Primeiro a Estilizacao depois autonomiza
</script>

<template>
    <nav 
    class="w-[320px] self-stretch p-5 bg-white flex flex-col border-r-2 border-gray-200">
        <div class="flex items-center gap-2 py-3">
            <img 
            class="h-20 "
            src="@/assets/sindebar/logoMaterna.svg" 
            alt="Uma mãe segurando um bebe dormindo com chupeta, onde ambos estão com os olhos fechados">
            <div>
                <h3 class="text-[18px] font-bold text-slate-800 leading-tight">Materna</h3>
                <p class="text-[#64748B]">Painel institucional</p>
            </div>
        </div>

        <hr class="-mx-5 my-4 border-0 border-t-2 border-gray-200 ">

        <ul class="space-y-2 flex-1">

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
                <RouterLink 
                    to="/agenda"
                    class="flex items-center space-x-3 w-full rounded-xl px-4 py-3 text-slate-600 hover:bg-pink-50 transition-colors font-medium [&.router-link-exact-active]:bg-[#DE6771] [&.router-link-exact-active]:text-white" >
                    Agenda
                </RouterLink>
            </li>

            <li class="w-full">
                <img src="" alt="">
                <RouterLink 
                    to="/doadoras"
                    class="flex items-center space-x-3 w-full rounded-xl px-4 py-3 text-slate-600 hover:bg-pink-50 transition-colors font-medium [&.router-link-exact-active]:bg-[#DE6771] [&.router-link-exact-active]:text-white" >
                    Doadoras
                </RouterLink>
            </li>            

            <li class="w-full">
                <img src="" alt="">
                <RouterLink 
                    to="/jornadas"
                    class="flex items-center space-x-3 w-full rounded-xl px-4 py-3 text-slate-600 hover:bg-pink-50 transition-colors font-medium [&.router-link-exact-active]:bg-[#DE6771] [&.router-link-exact-active]:text-white" >
                    Jornadas
                </RouterLink>
            </li>

            <li class="w-full">
                <img src="" alt="">
                <RouterLink 
                    to="/campanhas"
                    class="flex items-center space-x-3 w-full rounded-xl px-4 py-3 text-slate-600 hover:bg-pink-50 transition-colors font-medium [&.router-link-exact-active]:bg-[#DE6771] [&.router-link-exact-active]:text-white" >
                    Campanhas
                </RouterLink>
            </li>          

            <li class="w-full">
                <img src="" alt="">
                <RouterLink 
                    to="/instituicao"
                    class="flex items-center space-x-3 w-full rounded-xl px-4 py-3 text-slate-600 hover:bg-pink-50 transition-colors font-medium [&.router-link-exact-active]:bg-[#DE6771] [&.router-link-exact-active]:text-white" >
                    Instituição
                </RouterLink>
            </li>            
            
        </ul>

        <hr class="-mx-5 my-4 border-0 border-t-2 border-gray-200 ">
          <!-- aqui seria puxado pela api fazer depois-->
        <div class="flex flex-row items-center space-x-3">
            <img 
            class="h-20"
            src="@/assets/sindebar/logoMaterna.svg" 
            alt="Uma mãe segurando um bebe dormindo com chupeta, onde ambos estão com os olhos fechados">
            <div>
                <h3 class="text-[18px] font-bold text-slate-800 leading-tight">Materna</h3>
                <p class="text-[#64748B]">Painel institucional</p>
            </div>
        </div>
    </nav>
</template>