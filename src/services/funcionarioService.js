import { requisicaoApi } from './api'

export async function buscarFuncionariosInstituicao() {
    const resposta = await requisicaoApi('funcionario/instituicao/me', {}, true)

    if (!resposta || !resposta.status) {
        return []
    }

    return resposta.response.funcionario ?? []
}

export async function atualizarFuncionario(id, dados) {
    const resposta = await requisicaoApi(
        `funcionario/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify(dados),
        },
        true
    )

    return resposta
}

export async function cadastrarFuncionario(dados) {
    const resposta = await requisicaoApi(
        'funcionario',
        {
            method: 'POST',
            body: JSON.stringify(dados),
        },
        true
    )

    return resposta
}