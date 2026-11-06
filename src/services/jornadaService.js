
import { requisicaoApi } from "./api";

export async function listarJornada(idInstituicao) {

    const resposta = await requisicaoApi(`instituicao/${idInstituicao}`)

    if (!resposta || !resposta.status) {
        return []
    }

    const dadosInstituicao = resposta.response.instituicao

    const instituicao = Array.isArray(dadosInstituicao)
        ? dadosInstituicao.find(item => item.id === idInstituicao)
        : dadosInstituicao

    return instituicao?.jornadas ?? []
}
