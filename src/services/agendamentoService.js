import { requisicaoApi } from "./api"

export async function listarAgendamentosInstituicao() {
    const resposta = await requisicaoApi(
        'agendamento/instituicao/me',
        {},
        true
    )

    if (!resposta || !resposta.status) return []

    return resposta.response.agendamento ?? []
}

export async function atualizarAgendamento(id, idStatus) {
    return await requisicaoApi(`agendamento/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id_status_agendamento: idStatus
        })
    }, true)
}
