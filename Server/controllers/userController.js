const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models/models')

const generateJWT = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}
class userController {
    async registration(req, res, next) {
        const { email, password, role } = req.body
        if (!email || !password) {
            return next(ApiError.badRequest("Некоректный email или password"))
        }
        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            return next(ApiError.badRequest("Пользователь уже существует"))
        }
        const admin = await User.findAndCountAll({where: {role: 'ADMIN'}})
        if(admin.count >= 1) {
            return next(ApiError.badRequest("Нельзя создать ещё одного администратора"))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({ email, role, password: hashPassword })
        const token = generateJWT(user.id, user.email, user.role)
        return res.json({ token })
    }

    async login(req, res, next) {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJWT(user.id, user.email, user.role)
        return res.json({ token })
    }

    async check(req, res) {
        const token = generateJWT(req.user.id, req.user.email, req.user.role)
        return res.json({ token })

    }
}

module.exports = new userController()