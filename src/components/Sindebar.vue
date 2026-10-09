<script setup>
// Primeiro a Estilizacao depois autonomiza
</script>

<template>
    <nav 
    class="w-xs h-screen ">
        <div class="flex flex-row items-center p-5">
            <img 
            class="h-20"
            src="../assets/logoMaterna.svg" 
            alt="Uma mãe segurando um bebe dormindo com chupeta, onde ambos estão com os olhos fechados">
            <div class="textoMaterna">
                <h3>Materna</h3>
                <p>Painel institucional</p>
            </div>
        </div>
        <br>
        <ul class="pl-10">

            <li class="">
                <img src="" alt="">
                <RouterLink 
                to="/dashboard"
                class="rounded-lg px-3 py-2 text-gray-600 hover:bg-pink-50 [&.router-link-exact-active]:bg-pink-100 [&.router-link-exact-active]:text-pink-700" >
                    Dashboard
                </RouterLink>
            </li>

            <li class="">
                <img src="" alt="">
                <p>Agenda</p>
            </li>

            <li class="">
                <img src="" alt="">
                <p>Doadoras</p>
            </li>            

            <li class="">
                <img src="" alt="">
                <p>jornadas</p>
            </li>

            <li class="">
                <img src="" alt="">
                <p>Campanhas</p>
            </li>          

            <li class="">
                <img src="" alt="">
                <p>Instituição</p>
            </li>            
            
        </ul>
    </nav>
</template>