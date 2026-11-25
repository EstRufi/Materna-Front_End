<script setup>
    import { ref, watch } from 'vue'
    import { RouterLink, useRoute, useRouter } from 'vue-router'

    defineOptions({ name: 'CabecarioView' })

    const route = useRoute()
    const router = useRouter()
    const busca = ref(String(route.query.busca ?? ''))

    watch(
        () => route.query.busca,
        (valor) => {
            busca.value = String(valor ?? '')
        }
    )

    function atualizarBusca() {
        router.replace({
            query: {
                ...route.query,
                busca: busca.value.trim() || undefined
            }
        })
    }
</script>

<template>
    <header class="flex h-[80px] w-full items-center justify-between gap-4 border-b-2 border-[#E2E8F0] bg-white px-5 md:px-[32px]">
        <RouterLink
            v-if="route.meta.exibeVoltarDoadoras"
            to="/doadora"
            class="inline-flex items-center gap-2 text-[14px] text-slate-600 transition-colors hover:text-materna"
        >
            <span aria-hidden="true">←</span>
            Voltar para doadoras
        </RouterLink>
        <h1 v-else class="text-[20px] font-bold">
            {{ route.meta.titulo }}
        </h1>

        <label
            v-if="route.meta.exibeBusca"
            class="flex h-[38px] w-full max-w-[220px] items-center gap-2 rounded-[8px] border border-slate-200 bg-slate-50 px-3 text-slate-400 focus-within:border-materna"
        >
            <svg viewBox="0 0 20 20" fill="none" class="h-4 w-4 shrink-0" aria-hidden="true">
                <circle cx="8.75" cy="8.75" r="5.75" stroke="currentColor" stroke-width="1.5" />
                <path d="m13 13 4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <input
                v-model="busca"
                type="search"
                placeholder="Buscar..."
                aria-label="Buscar doadoras"
                class="min-w-0 flex-1 bg-transparent text-[12px] text-slate-700 outline-none placeholder:text-slate-400"
                @input="atualizarBusca"
            >
        </label>
    </header>
</template>