import { requisicaoApi } from '@/services/api'

export async function fazerLogin(dados) {
    return await requisicaoApi('funcionario/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
}
