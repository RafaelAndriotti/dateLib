import { erros } from "./err/trataErros.js";

function adicionaDias(data, dias) {

    if (!(data instanceof Date) || isNaN (data.getTime())) {
        throw new Error (erros.INVALID_DATE)
    }

    if ( isNaN (dias)){
        throw new Error(erros.INVALID_TYPE)
    }

    const novaData = new Date(data);
    novaData.setDate(novaData.getDate() + Number(dias));

    return novaData

}

// const data = new Date('2026-01-14')

// adicionaDias('a', '2')

function adicionaMeses(data, mes){

    if (!(data instanceof Date) || isNaN (data)) {
        throw new Error (erros.INVALID_DATE)
    }

    if ( isNaN (mes)){
        throw (erros.INVALID_TYPE)
    }


    const novaData = new Date(data);
    novaData.setMonth(novaData.getMonth() + Number(mes))

    return novaData
}

// const data = new Date('2026-01-14')

// adicionaMeses(data, 12)

function adicionaAnos (data, ano) {

    if (!(data instanceof Date) || isNaN (data)) {
        throw new Error (erros.INVALID_DATE)
    }

    if ( isNaN (ano)){
        throw new Error (erros.INVALID_TYPE)
    }

    const novaData = new Date(data)
    novaData.setFullYear(novaData.getFullYear() + Number(ano))

    return novaData
}

// const data = new Date('2026-01-14')

// console.log(adicionaAnos(data, undefined));
 