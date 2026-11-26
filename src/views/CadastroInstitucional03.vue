<script setup>
import InformacaoEndereco from '@/components/cadastroInstitucional03/InformacaoEndereco.vue';
import LateralEndereco from '@/components/cadastroInstitucional03/LateralEndereco.vue';

</script>

<template>

    <main class="flex min-w-0">
        <LateralEndereco
                :titulo=" `Junte-se à maior
                rede de bancos de 
                leite humano`"
                :descricao="`Cadastre sua instituição para modernizar
                agendamentos, acompanhar doadoras em tempo
                real e otimizar coletas.`"
            :informacoes="[
                'Gestão simplificada e automatizada de coletas',
                'Canal direto e seguro com mães doadoras',
                `Relatórios em conformidade com normas 
                sanitárias`,
                'Suporte dedicado para equipes e técnicos'
            ]"
                :progresso="true"
                :etapaAtual="1"
                :quantidadeEtapas="4"

                :dados-footer="['Ambiente Seguro Institucional',
                'Redes BLH Brasil'
            ]"
        />
    
        <div class="flex-1 min-w-0">
            <InformacaoEndereco/> 
        </div>
    </main>

</template>