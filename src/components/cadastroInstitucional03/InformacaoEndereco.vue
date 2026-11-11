<script setup>
import { ref } from 'vue';

const processo = ref(true)
const etapaAtual = ref(3)

const etapa = [
    'Instituicao',
    'Responsável',
    'Local&Horário',
    'Acesso'
]
const tipoColeta = ref('domicilio')

const dias = ref([
    { nome: 'Segunda-feira', ativo: true, inicio: '08:00', fim: '17:00' },
    { nome: 'Terça-feira', ativo: true, inicio: '08:00', fim: '17:00' },
    { nome: 'Quarta-feira', ativo: true, inicio: '08:00', fim: '17:00' },
    { nome: 'Quinta-feira', ativo: true, inicio: '08:00', fim: '17:00' },
    { nome: 'Sexta-feira', ativo: true, inicio: '08:00', fim: '17:00' },
    { nome: 'Sábado', ativo: false, inicio: '', fim: '' },
    { nome: 'Domingo', ativo: false, inicio: '', fim: '' }
])

function replicarHorario() {
    const inicio = dias.value[0].inicio
    const fim = dias.value[0].fim

    dias.value.slice(1, 5).forEach(dia => {
        dia.ativo = true
        dia.inicio = inicio
        dia.fim = fim
    })
}
</script>

<template>
        <div class="mb-7 w-full text-left px-14">

            <div class="w-full flex items-center justify-between">

                <!-- Etapas -->
                <div class="h-8 w-30 rounded-lg flex mt-12"
                style="background-color:#F5E6E9;">
                
                    <span class="font-bold rounded-full text-xs 
                        text-[12px] items-center px-5 mt-2" 
                        style="color: #DE6B72;">
                        ETAPA 3 DE 4
                        </span>

                <!-- Dados -->
                </div>
                        <span class="text-[12px] text-[#94A3B8] mt-20">
                            Endereço e Funcionamento
                        </span>

                    </div>


                <h1 class="text-[28px] font-bold text-black text- mt-2">
                    Criar conta institucional
                </h1>

                <p class="text-sm text-gray-600 text-[14px] mb-9">
                    Defina a localização física do posto de coleta/banco e os horários de atendimento.
                </p>


            </div>

                <!--Indica de etapas-->
                <div v-if="processo" class="mb-8 flex w-full max-w-[960px] px-14">

                    <div
                        v-for="(etapa, index) in ['Instituição', 'Responsável', 'Local e Horário', 'Acesso']"
                        :key="index"
                        class="flex flex-1 flex-col items-center">


                        <div class="flex w-full items-center">

                        <div
                            class="h-[1px] flex-1"
                            :class="index === 0 ? 'bg-traslate' : 'bg-gray-300 '">
                        </div>

                        <div
                            class="relative z-10 shrick-0 flex h-8 w-8 items-center justify-center rounded-full text-xs"
                            :class="index + 1 <= etapaAtual
                                ? 'bg-[#DE6B72] text-white'
                                : 'border border-gray-300 bg-white text-gray-400'">
                            {{ index + 1 }}
                        </div>

                        <div
                            class="h-[1px] flex-1"
                            :class="index === 2 ? 'bg-transparent' : 'bg-gray-300'">
                        </div>

                    </div>

            <p class="mt-2 whitespace-nowrap text-[12px] text-[#DE6B72] font-bold mb-2">
                {{ etapa }}
            </p>

        </div>
        </div>

            <!--Informacoes-->
        <div class="items-center px-36 mb-4">
            <h1 class="text-[14px] font-bold text-black">
                3. Endereço da Instituição
            </h1>
            <p class="text-[12px] text-[#64748B]">
                Local onde as doadoras e receptoras encontram o banco ou posto de coleta.</p>
        </div>



            <!--Endereco/CEP-Lougadoro -->
            <div class="w-[1013px] flex justify-between gap-6 px-36">

                <div class="flex-1 w-full min-w-0 text-left mb-6">
                    <div class="flex flex-col gap-1">

                        <label class="text-[12px] font-medium text-gray-700">
                            CEP                  
                        </label>

                        <input 
                        type="text"
                        placeholder="01310-100"
                        class="h-[47px] w-110 rounded-md border border-gray-300 
                        bg-white px-3 text-[12px] text-gray-700
                        outline-none border-gray-300 focus:border-[#D1D5DB] ">
                    </div>
                </div>

                    <div class="flex-1 min-w-0 mb-6 px-110">
                        <div class="flex flex-col ">
                            <label class="text-[12px] font-medium text-gray-700">
                                Logradouro
                            </label>

                            <input 
                            type="text"
                            placeholder="Ex: Av. Paulista"
                            class="h-[47px] w-110 rounded-md border border-gray-300 
                            bg-white px-3 text-[14px] text-gray-700
                            outline-none border-gray-300 focus:border-[#D1D5DB] mt-1">
                        </div>
                    </div>
                </div>


                <!--Endereco/Numero-Complemento -->
                <div class="w-[640px] flex justify-between gap-6 px-36">
                    <div class="w-full text-left mb-2">
                        <div class="flex flex-col gap-1">
                            <label class="text-[12px] font-medium text-gray-700">
                                Número
                            </label>

                            <input 
                            type="text"
                            placeholder="1000"
                            class="h-[47px] w-110 rounded-md border border-gray-300 
                            bg-white px-3 text-[14px] text-gray-700
                            outline-none border-gray-300 focus:border-[#D1D5DB]">
                        </div>
                    </div>
                
                <div class="w-full whitespace-nowrap space-y-4 mb-4">

                    <div class="flex flex-col px-22 mt-1">
                        <label class="text-[12px] font-medium text-gray-700">
                            Complemento
                        </label>

                        <input 
                        type="text"
                        placeholder="Ex: Bloco B, 3º andar"
                        class="h-[47px] w-110 rounded-md border border-gray-300 
                        bg-white px-3 text-[14px] text-gray-700
                        outline-none border-gray-300 focus:border-[#D1D5DB]">
                    </div>
                </div>
            </div>


            <!-- Endereco/Bairro-Cidade -UF -->
            <div class="w-[980px] flex gap-2 px-36">
                <div class="w-full whitespace-nowrap space-y-4 mb-4">
                    <div class="flex flex-col gap-1">
                        <label class="text-[14px] font-medium text-gray-700">
                        Bairro
                        </label>

                        <input 
                        type="text"
                        placeholder="Bela Vista"
                        class="h-[47px] w-90 rounded-md border border-gray-300 
                        bg-white px-3 text-[14px] text-gray-700
                        outline-none border-gray-300 focus:border-[#D1D5DB]">
                    </div>
                </div>

                <div class="w-full whitespace-nowrap space-y-4 mb-4">
                    <div class="flex flex-col gap-1 mt-1">
                        <label class="text-[12px] font-medium text-gray-700">
                        Cidade
                        </label>

                        <input 
                        type="text"
                        placeholder="São Paulo"
                        class="h-[47px] w-90 rounded-md border border-gray-300 
                        bg-white px-3 text-[14px] text-gray-700
                        outline-none border-gray-300 focus:border-[#D1D5DB]">
                    </div>
                </div>

                <div class="w-full whitespace-nowrap space-y-4 mb-4">
                    <div class="flex flex-col gap-1 mt-1">
                        <label class="text-[12px] font-medium text-gray-700">
                        UF
                        </label>

                        <input 
                        type="text"
                        placeholder="SP"
                        class="h-[47px] w-43 rounded-md border text-center border-gray-300 
                        bg-white px-3 text-[14px] text-gray-700
                        outline-none border-gray-300 focus:border-[#D1D5DB]">
                    </div>
                </div>
            </div>

        <div class="w-full px-36 mt-3 mb-3">
            <div class="h-px w-230 bg-gray-200 "></div>
        </div>

        <!--Coleta-->
        <div class="w-full px-36 mb-4">
            <h2 class="text-[14px] font-semibold text-black-300">
                Coleta em domicílio
            </h2>

            <p class="text-[12px] font-normal text-[#64748B]">
                Indique se a unidade oferece o serviço de busca domiciliar para as mães doadoras cadastradas.
            </p>
        </div>

        <div class="flex w-full items-start justify-between grid grid-cols-2 gap-50 px-36">

                <!-- Coleta em casa -->
                <div
                    @click="tipoColeta = 'domicilio'"
                    :class="tipoColeta === 'domicilio'
                        ? 'border-[#DE6B72] bg-[#FBF0F1]'
                        : 'border-gray-200 bg-white'"
                    class="relative h-[80px] rounded-xl border-2 p-2 cursor-pointer w-90">

                    <!-- Título e botão -->
                    <div class="flex items-start justify-between gap-3">

                        <h2 class="text-[12px] font-semibold text-gray-800 px-1 mt-2 mb-1">
                            Realiza coleta em casa / domicílio
                        </h2>

                        <div
                            class="shrink-0 h-6 w-6 rounded-md border-2 flex items-center justify-center"
                            :class="tipoColeta === 'domicilio'
                                ? 'bg-[#DE6B72] border-[#DE6B72]'
                                : 'bg-white border-gray-300'">

                            <img 
                            src="/src/assets/InformacaoEndereco/Correto.svg" 
                            alt="Correto" 
                            class="w-4 h-4 object-contain">
                        </div>
                    </div>

                    <p class="text-[11px] text-gray-600 leading-3 mb-3 px-1">
                    A equipe da instituição busca o leite humano na
                    residência da doadora.
                    </p>

                </div>

                <!-- Coleta no banco -->
                <div
                    @click="tipoColeta = 'banco'"
                    :class="tipoColeta === 'banco'
                        ? 'border-[#DE6B72] bg-[#FBF0F1]'
                        : 'border-gray-200 bg-white'"
                    class="relative h-[80px] rounded-2xl border-2 p-5 cursor-pointer w-90">

                    <!-- Título e botão -->
                    <div class="flex items-start justify-between gap-3">

                        <h2 class="text-[12px] font-semibold text-gray-800">
                            Coleta no banco de leite 
                        </h2>

                        <div
                            class="shrink-0 h-6 w-6 rounded-md border-2 flex items-center justify-center"
                            :class="tipoColeta === 'banco'
                                ? 'bg-[#DE6B72] border-[#DE6B72]'
                                : 'bg-white border-gray-300'">

                            <img 
                            src="/src/assets/InformacaoEndereco/Correto.svg" 
                            alt="Correto" 
                            class="w-4 h-4 object-contain">
                        </div>
                    </div>

                    <p class="text-[11px] text-gray-600 leading-3">
                        Recebimento de doações apenas
                    presencialmente na unidade física.
                    </p>
                </div>
            </div>

        <div class="w-full mt-7 px-36">
            <div class="h-px w-190 bg-gray-200"></div>
        </div>
        

            <!-- Horários de funcionamento -->
            <div class="w-300 mt-3 px-36">

                <!-- Cabeçalho -->
                <div class="flex items-center justify-between mb-2">

                    <h2 class="text-[12px] font-bold tracking-wide text-gray-700">
                        HORÁRIO DE FUNCIONAMENTO POR DIA
                    </h2>

                    <button
                        type="button"
                        @click="replicarHorario"
                        class="text-[12px] font-medium text-[#DE6B72] hover:underline">
                        Replicar horário de segunda para dias úteis
                    </button>

                </div>

                <p class="text-[12px] text-gray-500 mb-4">
                    Defina os dias e intervalos em que a unidade estará aberta
                    para triagem e coleta de leite humano.
                </p>

                <!-- Lista dos dias -->
                <div class="w-full border border-gray-200 rounded-2xl overflow-hidden shadow-sm">

                    <div
                        v-for="(dia, index) in dias"
                        :key="dia.nome"
                        class="min-h-[75px] flex items-center justify-between
                        px-5 py-3 border-b border-gray-200 last:border-b-0">

                        <!-- Dia e seleção -->
                        <div class="flex items-center gap-4">

                            <button
                                type="button"
                                @click="dia.ativo = !dia.ativo"
                                :aria-pressed="dia.ativo"
                                class="h-6 w-6 shrink-0 rounded-md border-2
                                flex items-center justify-center"
                                :class="dia.ativo
                                    ? 'bg-[#DE6B72] border-[#DE6B72]'
                                    : 'bg-white border-gray-300'">

                               <img 
                                src="/src/assets/InformacaoEndereco/Correto.svg" 
                                alt="Correto" 
                                class="h-6 w-6 object-contain">

                            </button>

                            <span class="text-[12px] font-semibold text-gray-700">
                                {{ dia.nome }}
                            </span>

                        </div>

                        <!-- Horários -->
                        <div class="flex items-center gap-3">

                            <!-- Fechado -->
                            <span
                                v-if="!dia.ativo"
                                class="rounded-md bg-gray-100 px-3 py-2
                                text-[11px] text-gray-500">
                                Fechado
                            </span>

                            <span
                                v-else
                                class="text-[14px] text-gray-400">
                                Das
                            </span>

                            <!-- Horário inicial -->
                            <input
                                type="time"
                                v-model="dia.inicio"
                                :disabled="!dia.ativo"
                                class="h-[45px] w-[120px] rounded-lg border
                                border-gray-200 px-3 text-[11px] text-gray-700
                                shadow-sm outline-none focus:border-[#DE6B72]
                                disabled:bg-gray-50 disabled:text-gray-300">

                            <span class="text-[12px] text-gray-400">
                                às
                            </span>

                            <!-- Horário final -->
                            <input
                                type="time"
                                v-model="dia.fim"
                                :disabled="!dia.ativo"
                                class="h-[45px] w-[120px] rounded-lg border
                                border-gray-200 px-3 text-[11px] text-gray-700
                                shadow-sm outline-none focus:border-[#DE6B72]
                                disabled:bg-gray-50 disabled:text-gray-300">
                        </div>
                    </div>
                </div>
            </div>

            <!--Linha-->
            <div class="w-full px-36 mt-7">
                <div class="h-px w-230 bg-gray-200 mb-7 "></div>
            </div>

           <!-- Botões -->
            <div class=" flex w-full justify-between items-center">

                <div class="justify-between px-36">
                    <button class="w-38 h-[48px] rounded-md 
                    bg-[#FFFFFF] justify-center flex items-center 
                    text-sm font-medium text-white hover:opacity-30 transition 
                    border border-gray-300 gap-3 ">

                    <img 
                    src="/src/assets/InformacoesResponsavel/voltar.svg" 
                    alt="voltar" 
                    class="w-4 h-4 object-contain">

                    <span class="text-black text-[16px] flex justify-end top-1/2 -translate-y-1/2 mt-6 gap-4">
                        Voltar
                    </span>

                    </button>
                </div>

            <div class="justify-between px-34">
                <button class="w-38 h-[48px] rounded-md 
                bg-[#DE6B72] justify-center flex items-center 
                text-sm font-medium text-white hover:opacity-30 transition gap-3">

                <span class="text-white text-[16px] flex justify-end top-1/2 -translate-y-1/2 mt-6 gap-4">
                    Avançar
                </span>
                
                <img 
                src="/src/assets/cadastro/Seta2.svg" 
                alt="Seta2" 
                class="w-4 h-3 object-contain">
                
                </button>
            </div>

            </div>

            <div class="w-full px-36 mt-7">
                <div class="h-px w-190 bg-gray-100 mb-3 "></div>
            </div>


            <div class="w-full flex items- justify-center gap-1 mt-4">
                <p class="whitespace-nowrap text-xs text-black/60 text-[14px]">
                    Já possui uma conta institucional? 
                </p>

                <a href="#" class="text-[15px] text-[#DE6B72] 
                            font-semibold hover:underline">
                    Entrar
                </a>

            </div>
    
</template>
