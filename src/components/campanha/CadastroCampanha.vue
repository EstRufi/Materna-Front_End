<script setup>
    const emit = defineEmits(['fechar'])
</script>

<template>
    <article class="p-[20px] w-full max-w-[1086px] h-[401] bg-white border-2 border-borda rounded-[12px]">
        <header class="flex justify-between mb-[24px]">
            <h1 class="text-[16px] font-bold">Nova campanha</h1>
            <button
            type="button"
            @click="emit('fechar')"
            aria-label="Fechar cadastro">
                <img src="@/assets/campanha/X.svg" alt="Icon de X">
            </button>
            
        </header>

        <section>
            <div class="w-full max-w-[767px]">
                <div class="flex flex-col">
                    <label class="text-[14px]">Titulo</label>
                    <input type="text" placeholder="Semana do Leite Humano">
                </div>

                <div class="flex flex-col">
                    <label class="text-[14px]">Titulo</label>
                    <input type="text" placeholder="Sobre a campanha">
                </div>

                <div class="flex justify-between">
                    <div>
                        <label class="text-[14px]">Titulo</label>
                        <input type="text" placeholder="dd/mm/aaaa">
                    </div>

                    <div>
                        <label class="text-[14px]">Titulo</label>
                        <input type="text" placeholder="dd/mm/aaaa">
                    </div>
                </div>
            </div>

            <div></div>
        </section>
    </article>
</template>