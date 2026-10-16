<script setup>

</script>

<template>
    <div class="grid grid-cols-1 min-[560px]:grid-cols-2 xl:grid-cols-4 gap-[24px] md:gap-[16px] w-full">
        <div class="h-[122px] w-[254px] flex flex-row bg-[#FFFFFF] border-2 border-[#D9D9D9] rounded-lg p-[24px] items-center">
            <img 
            src="@/assets/cardIndicado/agendamento.svg" 
            alt="Icon de agendamento"
            class="h-[20px] pr-[16px]">
            <div>
                <h3 class="font-bold text-[24px] ">6</h3>
                <p class="text-[12px] text-[#64748B]">Agendamentos hoje</p>
            </div>
        </div>

        <div class=" h-[122px] w-[254px] flex flex-row bg-[#FFFFFF] border-2 border-[#D9D9D9] rounded-lg p-[24px] items-center">
            <img 
            src="@/assets/cardIndicado/confirmados.svg" 
            alt="Icon de confirmados"
            class="h-[20px] pr-[16px]">
            <div>
                <h3 class="font-bold text-[24px]">6</h3>
                <p class="text-[12px] text-[#64748B]">Confirmados hoje</p>
            </div>
        </div>

        <div class="h-[122px] w-[254px] flex flex-row bg-[#FFFFFF] border-2 border-[#D9D9D9] rounded-lg p-[24px] items-center">
            <img 
            src="@/assets/cardIndicado/pendentes.svg" 
            alt="Icon de pendentes"
            class="h-[20px] pr-[16px]">
            <div>
                <h3 class="font-bold text-[24px]">6</h3>
                <p class="text-[12px] text-[#64748B]">Pendentes hoje</p>
            </div>
        </div>
        <div class="h-[122px] w-[254px] flex flex-row bg-[#FFFFFF] border-2 border-[#D9D9D9] rounded-lg p-[24px] items-center">
            <img 
            src="@/assets/cardIndicado/cancelados.svg" 
            alt="Icon de Cancelados"
            class="h-[20px] pr-[16px]">
            <div>
                <h3 class="font-bold text-[24px]">6</h3>
                <p class="text-[12px] text-[#64748B]">Cancelados</p>
            </div>
        </div>
    </div> 
</template>