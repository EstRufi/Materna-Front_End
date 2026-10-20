<script setup>
// Aqui pode mudar pela API
const agendamento = [
    {dia: 'Seg',quantidade: 5},
    {dia: 'Ter',quantidade: 5},
    {dia: 'Qua',quantidade: 5},
    {dia: 'Qui',quantidade: 7},
    {dia: 'Sex',quantidade: 6},
    {dia: 'Sáb',quantidade: 4},
]

const maiorQuantidade = Math.max(...agendamento.map(item => item.quantidade))
</script>

<template>
    <div class="w-[720px] h-[352px]">
        <h3>Agendamentos da semana</h3>
        <p>12 semana anterior</p>
        <div class="h-[220px] flex flex-row gap-[8px]">
            <div v-for="itemAgendamento in agendamento" :key="itemAgendamento.dia"
            class="h-full flex flex-col items-center justify-end"">
                <div class="w-[90px] bg-[#D96572]" 
                :style="{
                height: `${(itemAgendamento.quantidade / maiorQuantidade) * 100}%`
                }">
                </div>
                
                <hr class="-mx-5 my-4 border-0 border-t-2 border-gray-200 ">
                
                <span>
                    {{ itemAgendamento.dia }}
               </span>
            </div>
        </div>

    </div>
</template>