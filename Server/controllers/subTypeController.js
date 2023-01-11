const {SubType} = require('../models/models')

class subTypeController {
    async create(req, res) {
        const {name} = req.body
        const subtype = await SubType.create({name})
        return res.json(subtype)
    }

    async getAll(req, res) {
        const subtypes = await SubType.findAll()
        return res.json(subtypes)
        
    } 
}

module.exports = new subTypeController()