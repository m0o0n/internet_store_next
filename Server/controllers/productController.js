const uuid = require('uuid')
const path = require('path')
const { Product } = require('../models/models')
class productController {
    async create(req, res) {
        try {
            const {
                name,
                brandCountryId,
                typeId,
                price1,
                price10,
                price50,
                info
            } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const product = await Product.create({
                name,
                brandCountryId,
                typeId,
                price1,
                price10,
                price50,
                img: fileName
            })
            return res.json(product)
        } catch (e) {

        }


    }

    async getAll(req, res) {

    }

    async getOne(req, res) {

    }
}

module.exports = new productController()