import { requisicaoApi } from "./api";

export async function listarCampanha(){

    const resposta = await requisicaoApi('campanha')

    return resposta.response.campanha
}