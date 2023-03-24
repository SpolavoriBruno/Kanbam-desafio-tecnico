const { v4: uuid } = require('uuid');

const sequelize = require('sequelize')
const db = require('./db')

const cardModel = db.define('card', {
    id: {
        type: sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    titulo: sequelize.STRING,
    conteudo: sequelize.STRING,
    lista: sequelize.STRING
});

async function getCard(id) {
    if(id) return cardModel.findByPk(id)
    return await cardModel.findAll()
}

async function insertCard(card) {
    card.id = uuid()
    return await cardModel.create(card)
}

async function updateCard(id, newCard) {
    const card = await cardModel.findByPk(id)

    if (card.titulo !== newCard.titulo)
        card.titulo = newCard.titulo

    if (card.conteudo !== newCard.conteudo)
        card.conteudo = newCard.conteudo

    if (card.lista !== newCard.lista)
        card.lista = newCard.lista

    await card.save()
    return card
}

async function deleteCard(id) {
    try {

        await cardModel.destroy({ where: { id } })
    } catch (error) {
        console.error(error)
        return false
    }
    return cardModel.findAll()
}

module.exports = {
    get: getCard,
    insert: insertCard,
    update: updateCard,
    delete: deleteCard
}
