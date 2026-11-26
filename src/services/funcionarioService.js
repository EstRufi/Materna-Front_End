import { requisicaoApi } from './api'

export async function buscarFuncionariosInstituicao() {
    const resposta = await requisicaoApi('funcionario/instituicao/me', {}, true)

    if (!resposta || !resposta.status) {
        return []
    }

    return resposta.response.funcionario ?? []
}