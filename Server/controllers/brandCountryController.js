const { BrandCountry } = require('../models/models')

class brandCountryController {
    async create(req, res) {
        const { name } = req.body
        const brandCountry = await BrandCountry.create({ name })
        return res.json(brandCountry)
    }

    async getAll(req, res) {
        const brandsCountries = await BrandCountry.findAll()
        return res.json(brandsCountries)
    }
}

module.exports = new brandCountryController()