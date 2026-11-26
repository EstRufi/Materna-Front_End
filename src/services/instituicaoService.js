import { requisicaoApi } from "./api"

export async function cadastrarInstituicao(dados){

    const resposta = await requisicaoApi('instituicao',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
    })

    return resposta
}

export async function buscarMinhaInstituicao() {
    const resposta = await requisicaoApi('instituicao/me', {}, true)

    console.log('Resposta completa da instituição:', resposta)

    if (!resposta || !resposta.status) return null

    const dados = resposta.response.instituicao

    return Array.isArray(dados) ? dados[0] : dados
}

export async function atualizarInstituicao(id, dados) {
    const resposta = await requisicaoApi(`instituicao/${id}`, {
        method: 'PUT',
        body: JSON.stringify(dados),
    }, true)

    return resposta
}