<script setup>
    const props = defineProps({
        doadora:{
            type: Object,
            required:true
        }
    })
</script>
<template>
    <article>
        <h1>Perfil da Doadora</h1>
        <p>Acompanhe a jornada e o histórico de doações.</p>

        <div>
            <div class="min-w-[48px] h-[48px] bg-[#F2F4F5] flex justify-center items-center rounded-full">
                <span class="text-[14px] text-materna font-bold">aa</span>
            </div>
            <div class="flex flex-col gap-1">
                <h1 class="text-[15px] font-semibold">{{ doadora.nome }}</h1>

                <span class="text-[#6b7280] text-[12px]">Cadastrada em 12/12/12</span>
                <div
                class="h-[28px] flex px-[10px] py-2 items-center gap-2 rounded-full border-2 text-[12px] font-medium"
                :class="classeStatus(doadora.status_jornada)">
                    <div 
                    class="h-2 w-2 rounded-full bg-current"
                    :class="classeStatus(doadora.status_jornada)">
                    </div>
                    
                    {{doadora.status_jornada}}
                </div>
                <div class="mb-[32px] flex flex-col gap-2 text-[13px] text-[#4B5563]">
                    <div class="flex gap-2"> 
                        <img class="w-[13px]" src="@/assets/doadora/e-mail.svg" alt="Icon de uma carta que representa gmail">
                        <p>{{ doadora.email }}</p>
                    </div>
                    
                    <div class="flex gap-2">
                        <img class="w-[13px]" src="@/assets/doadora/telefone.svg" alt="Icon de telefone">
                        <p>{{ formatarTelefone(doadora.telefone) }}</p>
                    </div>
                    
                    <div class="flex gap-2">
                        <img class="w-[13px]" src="@/assets/doadora/localizador.svg" alt="Icon de local">
                        <p>{{ doadora.cidade}}</p>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>