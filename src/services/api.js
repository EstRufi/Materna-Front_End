const Api_Url = import.meta.env.VITE_API_URL

export async function requisicaoApi (endPoint, options = {}){
    try {
        const resposta = await fetch(`${Api_Url}/${endPoint}`,{
            ...options,
            headers:{
                ...options.headers,
            }
        })
        
        if(!resposta.ok){
            throw new Error(`Erro na requisição: ${resposta.status}`)
        }
        
        if (resposta.status ===204){
            return null
        }

        return resposta.json()
    } catch (error) {
        console.error('Erro na requisição da API:', error)
        throw error
    }
}