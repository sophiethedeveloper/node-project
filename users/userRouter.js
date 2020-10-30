const express = require('express')
const router = express.Router()
const User = require('./userDb.js')

router.get('/', (req, res) => {
    User.get()
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((error) => {
        res.status(500).json({message: error.message})
    })
})

router.get('/:id', (req, res) => {
    User.getById(req.params.id)
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((error) => {
        res.status(500).json({message: error.message})
    })
})

router.delete('/:id', (req, res) => {
    User.remove(req.params.id)
    .then(() => {
        res.status(200).json({message: 'The user has been deleted'})
    })
    .catch(err => {
        res.status(500).json({message: error.message})
    })
})

router.post('/', (req, res) => {
    User.insert(req.body)
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((error) => {
        res.status(500).json({message: error.message})
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body 

    User.update(id, changes)
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((error) => {
        res.status(500).json({message: error.message})
    })
})

module.exports = router;