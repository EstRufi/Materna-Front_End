const doadoras = [
    {
        id: 12,
        nome: 'Maria Silva',
        cpf: '12345678901',
        foto: null,
        data_nascimento: '1995-04-20',
        email: 'maria@example.com',
        is_validado: true,
        telefone: '(11) 98123-4567',
        endereco: {
            logradouro: 'Rua das Flores',
            cep: '01001000',
            bairro: 'Centro',
            numero: '100',
            complemento: null,
            latitude: null,
            longitude: null,
            cidade: 'São Paulo',
            estado: 'SP'
        },
        jornada: {
            id: 3,
            nome: 'Jornada de doação',
            descricao: 'Acompanhamento da doadora',
            total_etapas_feitas: 4,
            total_etapas: 5,
            etapas_feitas: [
                {
                    id_jornada_doacao: 21,
                    id_etapa: 8,
                    titulo: 'Conheça a doação',
                    ordem: 1,
                    ciclo: 1,
                    data_conclusao: null,
                    documentos: [],
                    agendamentos: []
                },
                {
                    id_jornada_doacao: 22,
                    id_etapa: 9,
                    titulo: 'Orientações',
                    ordem: 2,
                    ciclo: 1,
                    data_conclusao: null,
                    documentos: [],
                    agendamentos: []
                },
                {
                    id_jornada_doacao: 23,
                    id_etapa: 10,
                    titulo: 'Documento de início',
                    ordem: 3,
                    ciclo: 1,
                    data_conclusao: null,
                    documentos: [
                        {
                            id: 6,
                            documento: '',
                            id_status_documento: 1,
                            status: 'Pendente',
                            motivo_recusa: null
                        }
                    ],
                    agendamentos: []
                },
                {
                    id_jornada_doacao: 24,
                    id_etapa: 11,
                    titulo: 'Agendamento',
                    ordem: 4,
                    ciclo: 1,
                    data_conclusao: null,
                    documentos: [],
                    agendamentos: [
                        {
                            id: 31,
                            dia: '2026-06-22',
                            horario: '14:00:00',
                            status: 'Pendente'
                        }
                    ]
                },
                {
                    id_jornada_doacao: 25,
                    id_etapa: 12,
                    titulo: 'Coleta',
                    ordem: 5,
                    ciclo: 3,
                    ciclo_total: 3,
                    encerrado: false,
                    data_conclusao: null,
                    documentos: [],
                    agendamentos: []
                }
            ],
            etapas_faltantes: []
        }
    }
]

export function calcularProgressoJornada(doadora) {
    const jornada = doadora?.jornada

    const totalEtapas = Number(jornada?.total_etapas ?? 0)
    const etapasFeitas = Number(jornada?.total_etapas_feitas ?? 0)

    if (totalEtapas <= 0) return 0

    return Math.min(
        100,
        Math.max(0, Math.round((etapasFeitas / totalEtapas) * 100))
    )
}

export async function listarDoadoras() {
    return structuredClone(doadoras)
}

export async function buscarPerfilDoadora(id) {
    return structuredClone(
        doadoras.find((doadora) => Number(doadora.id) === Number(id)) ?? null
    )
}
