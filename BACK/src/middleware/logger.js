const Card = require("../model/card")

const translateMethods = {
    PUT: 'Atualizado',
    DELETE: 'Removido'
}

function getFormatedDate() {
    return new Date().toLocaleString().split(',').join('')
}

async function getCardTitle(id) {
    const data = await Card.get(id)
    return data[0].titulo
}

module.exports = async (req, res, next)  => {
    const {method} = req
    const {id} = req.params
    let {titulo} = req.body
    const date = getFormatedDate()

    if(!titulo) titulo = await getCardTitle()

    console.log(`${date} - Card ${id} - ${titulo} - ${translateMethods[method]}`)
    next()
}