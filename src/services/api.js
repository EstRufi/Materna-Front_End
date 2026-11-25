const Api_Url = import.meta.env.VITE_API_URL

export async function requisicaoApi(endPoint, options = {}) {
    try {
        const resposta = await fetch(`${Api_Url}/${endPoint}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            }
        })

        const dados = await resposta.text()

        if (!resposta.ok) {
            console.error('Status:', resposta.status)
            console.error('Resposta do backend:', dados)

            throw new Error(`Erro na requisição: ${resposta.status}`)
        }

        if (resposta.status === 204 || !dados) {
            return null
        }

        return JSON.parse(dados)

    } catch (error) {
        console.error('Erro na requisição da API:', error)
        throw error
    }
}