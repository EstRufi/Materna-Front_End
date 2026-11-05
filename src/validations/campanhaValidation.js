export function validarTiulo(formulario){

    if(formulario.titulo == '')
        return 'O título da campanha é obrigatório.'
    else if(formulario.titulo.length >100)
        return 'O título da campanha tem limite de 100 caracteres.'

    return ''
}

export function validarDescrição(formulario){

    if(formulario.descricao == '')
        return  'A descrição da campanha é obrigatório.'

    return ''
}

export function validarDataInicio(formulario){
    const hoje = new Date()
    const anoAtual = hoje.getFullYear()
    const anoSelecionado = Number(formulario.dataInicio.split('-')[0])

    if (!formulario.dataInicio) 
        return 'A data inicio da campanha é obrigatório.'
    else if(anoSelecionado < anoAtual){
        return 'O ano da data inicial não pode ser anterior ao ano atual.'
    }
    return ''

}

export function validarDataFinal(formulario){

    if(!formulario.dataFinal)
        return 'A data de término é obrigatória.'
    else if(!formulario.dataInicio)
        return 'Preenxa a data inicial para proseguir'
    else if(formulario.dataInicio <= formulario.dataFinal)
        return 'A data final tem que ser maior que a data inicial'
}

export function validarImagem(formulario){
    if(formulario.descricao == '')
        return 'O título da campanha é obrigatório.'
    else if(formulario.descricao )
        aa

    return ''
}

