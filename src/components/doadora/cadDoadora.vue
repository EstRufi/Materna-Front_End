<script setup>
    const props = defineProps({
        doadora:{
            type: Object,
            required:true
        }
    })

    function formatarTelefone(telefone) {
        if (!telefone) return ''

        const numero = telefone.replace(/\D/g, '')

        const ddd = numero.slice(0, 2)
        const telefoneFormatado = numero.slice(2)

        return `(${ddd}) ${telefoneFormatado}`
    }

    function classeStatus(status) {
        const classes = {
            'Iniciadas': 'bg-[#FFFBEB] text-[#B45309] border-[#FEF3C7]',
            'Em andamento': 'bg-[#FFF7ED] text-[#C2410C] border-[#FFEDD5]',
            'Ativas': 'bg-[#ECFDF5] text-[#047857] border-[#A7F3D0]',
            'Finalizadas': 'bg-[#DE6B72]/10 text-materna border-materna'
        }

        return classes[status] || 'bg-gray-100 text-gray-600 border-gray-200'
    }

    function formatarData(data) {
        if (!data) return ''
        const dataSemHorario = data.split('T')[0]

        const [ano, mes, dia] = dataSemHorario.split('-')
        return `${dia}/${mes}/${ano}`
    }
</script>

<template>
    <RouterLink 
    :to="{
        name: 'perfilDoadora',
        params: { id: doadora.id },
    }"
    class="block p-[24px] w-full max-w-[350px] h-[266px] bg-[#FFFFFF] border-2 border-borda rounded-[12px]">
        <header class="flex  mb-[20px] gap-3">
            <div class="min-w-[48px] h-[48px] bg-[#F2F4F5] flex justify-center items-center rounded-full">
                <span class="text-[14px] text-materna font-bold">aa</span>
            </div>
            <div class="flex w-full justify-between">
                <div class="flex flex-col gap-1">
                    <h1 class="text-[15px] font-semibold">{{ doadora.nome }}</h1>

                    <span class="text-[#6b7280] text-[12px]">Desde {{ formatarData(doadora.data_inicio) }}</span>
                </div>
                <div
                class="h-[28px] flex px-[10px] py-2 items-center gap-2 rounded-full border-2 text-[12px] font-medium"
                :class="classeStatus(doadora.status_jornada)">
                    <div 
                    class="h-2 w-2 rounded-full bg-current"
                    :class="classeStatus(doadora.status_jornada)"></div>
                    {{doadora.status_jornada}}
                </div>
            </div>

        </header>

        <main class="mb-[32px] flex flex-col gap-2 text-[13px] text-[#4B5563]">
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
        </main>
<!-- Aqui terei que ver com a API quando estiver tempo para fazer então terei que arrumar -->
        <footer class="mt-[9px]">
            <div class="flex justify-between">
                <span class="text-[13px] font-medium">Jornada</span>
                <span class="text-[13px] text-[#6b7280]">{{ doadora.jornada.progresso }}%</span>
            </div>
            <div class="h-3 w-full rounded-full bg-gray-200 overflow-hidden">
                <div
                    class="h-full rounded-full bg-materna"
                    :style="{ width: `${doadora.jornada.progresso}%` }"
                ></div>
            </div>
        </footer>
    </RouterLink>
</template>

<!-- Etapa for agendavel não pode nada 
 
e quando tiver os dois de baixo true o agendavel tem que ser false
quando há uma ativa os outros não podem estar ativos
-->