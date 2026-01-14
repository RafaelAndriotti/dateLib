function diferencaEntreDatas(dataI, dataF) {

    const tempo = dataI.getTime() - dataF.getTime()
    const msDia = Math.abs(60 * 60 * 60 * 24)

    const diferenca = Math.floor(tempo / (msDia))

    return `A diferenca entre as datas informadas é de: ${diferenca} dias`
}

const dataInicial = new Date('2023/10/01')
const dataFinal = new Date('2023/10/20')

console.log(diferencaEntreDatas(dataFinal, dataInicial))