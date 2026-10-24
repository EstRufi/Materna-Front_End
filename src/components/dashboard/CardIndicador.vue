<script setup>

</script>

<template>
    <div class="flex flex-wrap gap-x-[24px] justify-between gap-y-4 w-full">
        <div class="h-[122px] w-[254px] flex flex-row bg-[#FFFFFF] border-2 border-[#D9D9D9] rounded-[16px] p-[24px] items-center">
            <div class="h-[48px] w-[40px] rounded-full bg-[#DE6B72]/10 flex items-center justify-center mr-[16px]">
                <img 
                    src="@/assets/cardIndicado/agendamento.svg" 
                    alt="Icon de agendamento"
                    class="h-[24px] w-[24px]"
                >
            </div>
            <div>
                <h3 class="font-bold text-[24px]">6</h3>
                <p class="text-[12px] text-texto-claro">Agendamentos hoje</p>
            </div>
        </div>

        <div class="h-[122px] w-[254px] flex flex-row bg-[#FFFFFF] border-2 border-[#D9D9D9] rounded-[16px] p-[24px] items-center">
            <div class="h-[48px] w-[40px] rounded-full bg-[#DE6B72]/10 flex items-center justify-center mr-[16px]">
                <img 
                    src="@/assets/cardIndicado/confirmados.svg" 
                    alt="Icon de confirmados"
                    class="h-[24px] w-[24px]"
                >
            </div>
            <div>
                <h3 class="font-bold text-[24px]">6</h3>
                <p class="text-[12px] text-texto-claro">Confirmados hoje</p>
            </div>
        </div>

        <div class="h-[122px] w-[254px] flex flex-row bg-[#FFFFFF] border-2 border-[#D9D9D9] rounded-[16px] p-[24px] items-center">
            <div class="h-[48px] w-[40px] rounded-full bg-[#FFF7ED] flex items-center justify-center mr-[16px]">
                <img 
                    src="@/assets/cardIndicado/pendentes.svg" 
                    alt="Icon de pendentes"
                    class="h-[24px] w-[24px]"
                >
            </div>
            <div>
                <h3 class="font-bold text-[24px]">6</h3>
                <p class="text-[12px] text-texto-claro">Pendentes hoje</p>
            </div>
        </div>

        <div class="h-[122px] w-[254px] flex flex-row bg-[#FFFFFF] border-2 border-[#D9D9D9] rounded-[16px] p-[24px] items-center">
            <div class="h-[48px] w-[40px] rounded-full bg-[#DE6B72]/10 flex items-center justify-center mr-[16px]">
                <img 
                    src="@/assets/cardIndicado/cancelados.svg" 
                    alt="Icon de Cancelados"
                    class="h-[24px] w-[24px]"
                >
            </div>
            <div>
                <h3 class="font-bold text-[24px]">6</h3>
                <p class="text-[12px] text-texto-claro">Cancelados</p>
            </div>
        </div>
    </div> 
</template>