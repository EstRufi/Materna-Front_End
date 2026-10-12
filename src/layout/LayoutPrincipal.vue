<script setup>
import Sindebar from '@/components/Sindebar.vue';
import { RouterView } from 'vue-router';
</script>
<template>
    <div class="flex">
        <Sindebar/>
        <RouterView />
    </div>
</template>