const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
})

const Product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price1: { type: DataTypes.INTEGER, allowNull: false },
    price10: { type: DataTypes.INTEGER, allowNull: false },
    price50: { type: DataTypes.INTEGER, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
})

const BrandCountry = sequelize.define('brandCountry', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const ProductInfo = sequelize.define('product_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
})

const ProductImages = sequelize.define('product_images', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    img: { type: DataTypes.STRING, allowNull: false },
})

const TypeBrand = sequelize.define('type_brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const SubType = sequelize.define('sub_type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
})


Type.hasMany(Product)
Product.belongsTo(Type)

BrandCountry.hasMany(Product)
Product.belongsTo(BrandCountry)

Product.hasMany(ProductInfo, { as: 'info' })
ProductInfo.belongsTo(Product)

Product.hasMany(ProductImages, { as: 'images' })
ProductImages.belongsTo(Product)

Type.belongsToMany(BrandCountry, { through: TypeBrand })
BrandCountry.belongsToMany(Type, { through: TypeBrand })

SubType.hasMany(Type)
Type.belongsTo(SubType)

module.exports = {
    User,
    Product,
    ProductInfo,
    ProductImages,
    Type,
    BrandCountry,
    TypeBrand,
    SubType
}