const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class typeController {
    async create(req, res, next) {
        try {
            const {name, subTypeId} = req.body
            console.log(req.body, name, subTypeId)
            const type = await Type.create({name, subTypeId})
            return res.json(type)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    } 
}

module.exports = new typeController()