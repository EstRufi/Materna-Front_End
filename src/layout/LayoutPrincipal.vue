<script setup>
import Cabecario from '@/components/layoutPrincipal/Cabecario.vue'
import Sindebar from '@/components/layoutPrincipal/Sindebar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
    <div class="flex min-w-0 min-h-screen">
        <Sindebar />

        <div class="flex-1 min-w-0">
            <Cabecario />
            <RouterView />
        </div>
    </div>
</template>