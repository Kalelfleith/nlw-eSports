// node não usa fechamando ';'
// const express = require('express'); - Importação padráo / nativa
// ECMAScripsModels
import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, nome: 'Anuncio 1' },
        { id: 1, nome: 'Anuncio 2' },
        { id: 1, nome: 'Anuncio 3' },
        { id: 1, nome: 'Anuncio 4' },
    ])
})

app.listen(3333)