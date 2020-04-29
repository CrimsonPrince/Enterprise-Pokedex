const express = require('express')
const Pokemon = require('../models/Pokemon')

const router = express.Router()

router.get('/pokemon/', async (req, res) => {
    try {
        pokemon = await Pokemon.getAll()
        res.send(pokemon)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/pokemon/:pokemonId', async (req, res) => {
    try {
        pokemon = await Pokemon.findPokemonById(req.params.pokemonId)
        res.send(pokemon)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/pokemon/search/name', async (req, res) => {
    try {
        console.log(req.body.query)
        status = await Pokemon.searchNames(req.body.query)
        res.send(status)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/pokemon/search/level', async (req, res) => {
    try {
        console.log(req.body.query)
        status = await Pokemon.searchLevel(req.body.query)
        res.send(status)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/pokemon/search/type', async (req, res) => {
    try {
        console.log(req.body.query)
        status = await Pokemon.searchType(req.body.query)
        res.send(status)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/pokemon/search/category', async (req, res) => {
    try {
        console.log(req.body.query)
        status = await Pokemon.searchCategory(req.body.query)
        res.send(status)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/pokemon/', async (req, res) => {
    try {
        status = await Pokemon.addPokemon(req.body)
        res.send(status)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/pokemons/:page', async (req, res) => {
    try {
        pokemon = await Pokemon.getAllPage(req.params.page)
        res.send(pokemon)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router