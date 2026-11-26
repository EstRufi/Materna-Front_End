export async function requisicaoApi(endPoint, options = {}, autenticado = false) {
    try {
        const headers = {
            'Content-Type': 'application/json',
            ...options.headers
        }

        if (autenticado) {
            const token = localStorage.getItem('token')

            if (!token) {
                console.error('Token JWT não encontrado.')
                return null
            }

            headers.Authorization = `Bearer ${token}`
        }

        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/${endPoint}`,
            {
                ...options,
                headers
            }
        )

        if (!response.ok) {
            const erro = await response.text()
            console.error('Erro na API:', erro)
            return null
        }

        if (response.status === 204) {
            return null
        }

        const resposta = await response.text()

        if (!resposta) {
            return null
        }

        return JSON.parse(resposta)

    } catch (erro) {
        console.error('Erro na requisição:', erro)
        return null
    }
}