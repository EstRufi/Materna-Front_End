<script setup>
import { listarJornada } from '@/services/jornadaService';
import { onMounted, ref } from 'vue';

    const props = defineProps({
        jornada:{
            type: Object,
            required:true
        }
    })
</script>

<template>
    <article 
    class="w-full max-w-[491px] h-[502px] flex flex-col bg-[#FFFFFF] border-2 border-borda rounded-[12px] p-[24px]">
        <nav class="flex flex-row justify-between mb-[16px] bg-blac">
            <div>
                <h2 class="text-[18px] font-bold">{{ jornada.nome }}B</h2>
                <span class="text-[14px] font-regular">{{ jornada.descricao }}</span>
            </div>
            <div >
                <div>
                    <!-- 0 = false 1 = true mudar para ativo e inativo -->
                    <div></div>
                    <p>{{jornada.is_ativo}}</p>
                </div>
                <div>bolinha</div>
            </div>
        </nav>

        <main class="flex flex-col gap-[24px] min-h-0 overflow-y-auto">
            <div class="flex flex-row items-center gap-[16px]">
                <div class="w-[32px] h-[32px] shrink-0 bg-[#F0F9F8] flex justify-center items-center rounded-full">
                    <img class="w-[15px]" src="@/assets/jornada/livro.svg" alt="Um Icon de um livro aberto">
                </div>
                <div class="flex flex-col">
                    <span class="text-[14px] font-medium">Conheça a doação</span>
                    <p class="text-[12px] text-[#6F797A]">O que é, e por que a doação de leite humano é importante.</p>
                </div>
            </div>

            <div class="flex flex-row items-center gap-[16px]">
                <div class="w-[32px] h-[32px] shrink-0 bg-[#ECEEEF] flex justify-center items-center rounded-full">
                    <img class="w-[15px]" src="@/assets/jornada/orientacoes.svg" alt="Um icon de prancheta">
                </div>
                <div class="flex flex-col">
                    <span class="text-[14px] font-medium">Orientações</span>
                    <p class="text-[12px] text-[#6F797A]">Higiene, coleta, armazenamento, transporte e entrega.</p>
                </div>
            </div>

            <div class="flex flex-row items-center gap-[16px]">
                <div class="w-[32px] h-[32px] shrink-0 bg-[#FFF7ED] flex justify-center items-center rounded-full">
                    <img class="w-[15px]" src="@/assets/jornada/arquivo.svg" alt="Um icon que representa os arquivos">
                </div>
                <div class="flex flex-col">
                    <span class="text-[14px] font-medium">Questionário inicial</span>
                    <p class="text-[12px] text-[#6F797A]">Triagem informativa sobre o processo.</p>
                </div>
            </div>

            <div
            v-for="etapas in jornada.etapas"
            class="flex flex-row items-center gap-[16px]">
                <div class="w-[32px] h-[32px] shrink-0 bg-[#FEF2F2] flex justify-center items-center rounded-full">
                    <img class="w-[15px]" src="@/assets/jornada/bandeira.svg" alt="Um icon que representa os arquivos">
                </div>
                <div class="flex flex-col">
                    <span class="text-[14px] font-medium">{{ etapas.titulo }}</span>
                    <p class="text-[12px] text-[#6F797A]">{{ etapas.descricao }}</p>
                </div>
            </div>
        </main>
    </article>
</template>