<script setup>
import Login from '@/views/Login.vue';
import LateralInformativo from './LateralInformativo.vue';
import { ref } from 'vue';

const email = ref('')
const senha = ref('')
const erro = ref('')

const recuperarSenha = ref(false)
const voltarLogin = ref(false)

function fazerLogin(){
    erro.value = ''

    if(!email.value.trim() || !senha.value){
        erro.value = 'Preencha o email e senha'
        return
    }

    if(
        email.value !== emailCorreto ||
        senha.value !== senhaCorreta
     ){
        erro.value = 'E-mail ou senha incorretos.Verifique suas credenciais e tente novamente'
        return
     }
}

</script>
    <template>
        <div
        v-if="recuperarSenha"
        class="fixed inset-0 z-50 bg-black/50 blackdrop-blur-sm
        flex items-center justify-center">

        <div class="w-[90%] max-w-[1600px] h-[1000px] 
        grid grid-cols-2 rounded-xl overflow-hidden">

        <!-- Parte rosa -->
        <div class="bg-[#D86B72] p-8">
                        <div class="absolute top-30 left-50 flex items-center gap-2 mt-36 px-86">
                            <img 
                            src="@/assets/logoMaterna.svg" 
                            alt="logo" 
                            class="w-16 h-16 object-contain">

                            <div>
                                <h1 class="text-[17px] font-bold text-[#ffffff]">
                                    Materna
                                </h1>
                                <p class="text-[#ffffff] text-sm">
                                    Painelinstitucional
                                </p>
                            </div>
                        </div>

                        <div class="mt-40 mb-9 w-full min-w-0 px-10">
                            <h2 class="text-[36px] font-bold leading-10 text left
                            text-white whitespace-pre-line mb-5">
                            Recuperação de <br>
                            acesso institucional
                            </h2>

                            <p class="mt-8 text-[16px] text-white whitespace-pre-line">
                                Mantenha sua unidade conectada com segurança à <br>
                                rede de bancos de leite humano.
                            </p>
                        </div> 

                        <div class="flex flex-col pl-10 gap-3">

                            <!-- Primeiro item -->
                        <div class="flex items-center gap-3">
                            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/30">
                                <img 
                                    src="/src/assets/telaLogin/Seta2.svg"
                                    alt="Seta2"
                                    class="h-3 w-3 object-contain"
                                >
                            </div>

                            <p class="text-[15px] leading-9 text-white">
                                Autenticação em duas etapas
                            </p>
                        </div>

                        <!-- Segundo item -->
                        <div class="flex items-center gap-3">
                            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/30">
                                <img 
                                    src="/src/assets/telaLogin/Seta2.svg"
                                    alt="Seta2"
                                    class="h-3 w-3 object-contain"
                                >
                            </div>

                            <p class="text-[15px] leading-9 text-white">
                                Recuperação rápida por e-mail ou SMS
                            </p>
                        </div>

                        <!-- Terceiro item -->
                        <div class="flex items-center gap-3">
                            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/30">
                                <img 
                                    src="/src/assets/telaLogin/Seta2.svg"
                                    alt="Seta2"
                                    class="h-3 w-3 object-contain"
                                >
                            </div>

                            <p class="text-[15px] leading-9 text-white">
                                Suporte técnico disponível
                            </p>
                        </div>
                        </div>

                         <div class="w-full px-10 mt-70">
                            <div class="h-px w-170 bg-white/20 mb-16 "></div>
                        </div>

                        <div class="w-full flex items-center justify-between">
                            
                            <p class="text=[11px] text-[#ffffff] ml-10 font-light">
                                Ambiente Seguro Institucional
                            </p>

                            <p class="text=[11px] text-[#ffffff] ml-10 font-light px-3">
                                Rede BLH Brasil
                            </p>
                        </div>

                        </div>

                        <!--Tela á direita-->
                        <div class="bg-[#ffffff] h-full flex items-center justify-center ml-9">

                            <div class="w-full max-w-[16000px] px-7 mb-1800">

                                    <div class="mt-26 mb-30 ml-16 flex h-8 w-80 w-fit rounded-full items-center px-4"
                                    style="background-color: #F5E6E9;">

                                    <span class="font-bold text-xs"
                                        style="color: #DE6B72;">
                                            RECUPERAÇÃO DE SENHA • ETAPA 0 DE 3
                                    </span>

                                    </div>

                                        <h1 class="text-[30px] font-bold text-black-900 ml-16 mb-1">
                                            Esqueceu a senha
                                        </h1>

                                        <p class="text-[14px] text-[#6B7280] ml-16 mb-11 mt-2">
                                            Insira suas credenciais para continuar.
                                        </p>

                                    <!-- CNPJ -->
                                    <div class="w-90 max-w-[520px] ml-16">

                                    <div class="flex flex-col gap-1">
                                        <label class="text-[14px] font-bold text-gray-700">
                                            CNPJ
                                        </label>

                                        <input 
                                        type="Seu CNPJ"
                                        placeholder="Seu email"
                                        class="h-[60px] w-140 rounded-md border border-gray-300 
                                        bg-white px-3 text-[14px] text-gray-700 mt-2 mb-10
                                        outline-none border-gray-300 focus:border-[#D1D5DB]"/>
                                    </div>
                                    
                                    <div class="justify-between">
                                        <button class="w-140 h-13 rounded-md bg-[#DE6B72]
                                        text-sm font-medium text-white houver:opacity-90 transition justify-center items-center">
                                            <span class="mb-4">
                                                Próximo
                                            </span>
                                            
                                                <img 
                                                    src="/src/assets/telaLogin/Seta.svg" 
                                                    alt="Seta" 
                                                    class="w-4 h-3 object-contain ml-80 mb-2">
                                        </button>
                                    </div>

                                    <div class="justify-between ">
                                    <button 
                                    @click="voltarLogin = true"
                                    class="text-[12px] w-120 flex justify-center text-[#DE6B72] 
                                    houver:opacity-90 transition mb-3 gap-2 mt-3 ml-9">
                                      <img 
                                        src="/src/assets/telaLogin/VoltarLogin.svg" 
                                        alt="VoltaLogin" 
                                        class="w-4 h-3 object-contain mt-1">
                                        
                                    <span>
                                    Voltar para o login
                                    </span>

                                    </button>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>

        <div class="w-full min-h-screen flex flex-col 
        px-3 gap-3 text-left pr-10 mt-60 px-60">

            <!-- Header -->
            <div class="mb-7 w-full max-w-[360px]">
                <div class="flex h-8 w-44 gap-1 rounded-full flex items-center px-4"
                    style="background-color: #F5E6E9;">

                    <img 
                    src="@/assets/telaLogin/Shield.svg" 
                    alt="Escudo"
                    class="w-4 h-4 object-contain">

                    <span class="font-normal text-xs"
                        style="color: #DE6B72;">
                            Acesso institucional
                    </span>
                </div>

                <h1 class="text-[30px] font-bold text-black-600">
                    Acesso ao painel
                </h1>
                <p class="text-sm text-gray-600">
                    Insira suas credenciais para continuar 
                </p>
            </div>

            <!--Caixa de erro-->
            <div 
            v-if="erro"
            class="mt-4 w-full flex items-start rounded-lg 
            border border-red-200 bg-red-50 text-red-600" 
            >

            <span>❌</span>
        
            <p class="text-[10px] leading-4">
                {{ erro }}
            </p>
        
            </div>
            

            <!-- Email -->
            <div class="w-90 max-w-[520px] space-y-4">
                <div class="flex flex-col gap-1">
                    <label class="text-[14px] text-gray-700">
                        E-mail
                    </label>

                    <input 
                    type="email"
                    placeholder="seu@email.com.br"
                    class="h-[40px] w-120 rounded-md border border-gray-300 
                    bg-white px-3 text-[14px] text-gray-700
                    outline-none border-gray-300 focus:border-[#D1D5DB]"/>
                </div>

                <!--Senha-->
                <div class="w-90 max-w-[520px] space-y-4">
                    <label class="text-[14px] text gray-700">
                        Senha
                    </label>

                    <input 
                    type="password"
                    placeholder="..........."
                    class="h-[40px] w-120 rounded-md border border-gray-300 
                    bg-white px-3 text-[18px] text-gray-700 mb-0
                    outline-none border-gray-300 focus:border-[#D1D5DB]"/>
                </div>

                <!--Esqueci minha senha-->
                <button 
                @click="recuperarSenha = true"
                class="text-[12px] w-120 flex justify-end text-[#DE6B72] 
                houver:opacity-90 transition mb-3"
                >
                Esqueci minha senha
                </button>
                
                <!--Botão-->
                </div>
                <button class="w-120 h-10 rounded-md bg-[#DE6B72]
                text-sm font-medium text-white houver:opacity-90 transition"
                >
                Entrar
                </button>

                <div class="w-102 flex justify-end">
                    <p class="text-xs text-[#D1D5DB] mt-2">
                        Problemas de acesso? Fale com o administrador da plataforma.
                    </p>
                </div>

            </div>
        
    </template>