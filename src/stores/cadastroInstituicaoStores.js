import { reactive } from 'vue'

export const cadastro = reactive({

    // ETAPA 1 - Instituição
    nome: '',
    cnpj: '',
    email: '',
    foto: '',
    id_coleta: null,
    telefone: '',

    // ETAPA 2 - Responsável
    funcionario: {
        nome: '',
        cpf: '',
        data_nascimento: '',
        email: '',
        senha: '',
        telefone: ''
    },

    // ETAPA 3 - Endereço
    cep: '',
    sigla_estado: '',
    cidade: '',
    logradouro: '',
    bairro: '',
    numero: null,
    complemento: '',

    // ETAPA 3 - Horários
    horarios: []
})
