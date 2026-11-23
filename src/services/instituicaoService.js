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