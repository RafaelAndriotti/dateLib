import { erros } from "./err/trataErros.js";

function dataFormatada(data, format = "DD/MM/YYYY"){

    if(!(data instanceof Date)) {
        throw new Error(erros.INVALID_DATE)
    }
    //Criando variaveis para dia, mes e ano e convertendo-as em String para formatacao
    const
        dia = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(),
        mesF = (mes.length == 1) ? '0' + mes : mes,
        anoF = data.getFullYear()  
        
    //Informando o que cada parametro do formato ira significar    
    return format
        .replace('DD', diaF)
        .replace('MM', mesF)
        .replace('YYYY', anoF)
}
const data = new Date('2026-1-1')

console.log(dataFormatada(data, 'YYYY/MM/DD'))