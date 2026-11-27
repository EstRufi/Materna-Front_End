import { requisicaoApi } from "./api"

export async function listarHorariosInstituicao() {
    const resposta = await requisicaoApi(
        'horario/instituicao/me',
        {},
        true
    )

    if (!resposta || !resposta.status) return []

    return resposta.response.horario ?? []
}


export async function cadastrarHorario(dados) {
    return await requisicaoApi('horario', {
        method: 'POST',
        body: JSON.stringify(dados)
    }, true)
}
