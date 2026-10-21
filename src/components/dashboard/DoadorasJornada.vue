<script setup>
    const jornadaDoadoras =[
        {nome:"Maria Silva",progresso: 4},
        {nome:"Socoro Silva",progresso: 50},
        {nome:"Gson Silva",progresso: 10},
        {nome:"juaninha Silva",progresso: 20}
    ]

    function validarPorcentagem(progresso){
        if(!Number.isFinite(progresso))
            return 'Erro'
        else if(progresso <0)
            return 0
        else if(progresso >100)
            return 100
        else
            return progresso
    }
</script>

<template>
    <div class="max-w-[346px] min-h-[352px] rounded-[16px] bg-white p-[24px] border-2 border-gray-200">
       <h3 class="text-[18px] font-bold mb-[5px]">Doadoras em jornada</h3>
       <div class="flex items-center">
            <p class="text-[30px] font-bold">{{ jornadaDoadoras.length }}</p> 
            <span class="gap-x-[5px]">Jornadas em andamento</span>
        </div>
        

        <div v-for="doadoras in jornadaDoadoras">
            <div class="flex">
                <p>{{ doadoras.nome }}</p>
                <span>{{validarPorcentagem(doadoras.progresso) }}%</span>
            </div>

            <div class="w-full h-[6px] bg-[#E2E8F0] rounded-full">
                <div class="h-full bg-[#D96572] rounded-full "
                    :style="{width: `${validarPorcentagem(doadoras.progresso)}%`}"></div>
            </div>
        </div>
        <RouterLink
            to=""
            class="text-[#D96572] hover:underline">
                Ver todas ↗
        </RouterLink>
    </div>
</template>