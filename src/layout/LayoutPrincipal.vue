<script setup>
import Cabecario from '@/components/Cabecario.vue';
import Sindebar from '@/components/Sindebar.vue';
import { RouterView } from 'vue-router';
</script>
<template>
    <div class="flex min-w-0">
        <Sindebar/>
        <div class="flex-1 min-w-0">
            <Cabecario/>
            <RouterView />
        </div>

    </div>
</template>