function adicionaDias(data, dias) {

    if (!(data instanceof Date) || isNaN (data)) {
        throw new Error ('Parametro invalido, o objeto deve ser do tipo Date')
    }

    const novaData = new Date(data);
    novaData.setDate(novaData.getDate() + Number(dias));

    console.log(novaData)

}

// const data = new Date('2026-01-14')

// adicionaDias('a', '2')

function adicionaMeses(data, mes){

    if (!(data instanceof Date) || isNaN (data)) {
        throw new Error ('Parametro invalido, o objeto deve ser do tipo Date')
    }

    const novaData = new Date(data);
    novaData.setMonth(novaData.getMonth() + Number(mes))

    console.log(novaData)
}

// const data = new Date('2026-01-14')

// adicionaMeses(data, 12)

function adicionaAnos (data, ano) {

    if (!(data instanceof Date) || isNaN (data)) {
        throw new Error ('Parametro invalido, o objeto deve ser do tipo Date')
    }

    const novaData = new Date(data)
    novaData.setFullYear(novaData.getFullYear() + Number(ano))

    console.log(novaData)
}

// const data = new Date('2026-01-14')

// adicionaAnos(data, 1)