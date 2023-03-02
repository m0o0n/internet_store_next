const uuid = require('uuid')
const path = require('path')
const { Product, ProductInfo } = require('../models/models')
const ApiError = require('../error/ApiError')
const { where } = require('sequelize')
class productController {
    async create(req, res, next) {
        try {
            let {
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

            if (info) {
                info = JSON.parse(info)
                info.forEach(info => {
                    ProductInfo.create({ title: info.title, description: info.body, productId: product.id })
                });
            }

            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }


    }

    async getAll(req, res) {
        let { brandCountryId, typeId, limit, page } = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = limit * page - limit
        let products;
        // const products = await Product.findAll()
        if (!brandCountryId && !typeId) {
            products = await Product.findAndCountAll({ limit, offset })
        }
        if (brandCountryId && !typeId) {
            products = await Product.findAndCountAll({ where: { brandCountryId }, limit, offset })
        }
        if (!brandCountryId && typeId) {
            products = await Product.findAndCountAll({ where: { typeId }, limit, offset })
        }
        if (brandCountryId && typeId) {
            products = await Product.findAndCountAll({ where: { brandCountryId, typeId }, limit, offset })
        }
        return res.json(products)

    }

    async getOne(req, res) {
        const { id } = req.params
        const product = Product.findOne({ where: { id }, include: [{ model: ProductInfo, as: 'info' }] })
        return res.json(product)
    }
}

module.exports = new productController()