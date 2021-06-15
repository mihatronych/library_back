const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Author = sequelize.define('author',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
})

const Mark = sequelize.define('mark',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    rate: {type: DataTypes.INTEGER, allowNull: false},
    content: {type: DataTypes.STRING, allowNull: false},
})

const Dialect = sequelize.define('dialect',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Language = sequelize.define('language',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    lang_group: {type: DataTypes.STRING, allowNull: false},
})

const Region = sequelize.define('region',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Publicator = sequelize.define('publicator',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    link: {type: DataTypes.STRING, allowNull: false},
    address: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Theme = sequelize.define('theme',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Topic = sequelize.define('topic',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    subject: {type: DataTypes.STRING, allowNull: false},
})

const Publication = sequelize.define('publication',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
    title: {type: DataTypes.STRING, allowNull: false},
    short_review: {type: DataTypes.TEXT, allowNull: false},
    pages: {type: DataTypes.INTEGER, defaultValue: 0},
    date_publ: {type: DataTypes.DATE, defaultValue: Date.now()},
    date_create: {type: DataTypes.DATE, defaultValue: Date.now()},
    file: {type: DataTypes.STRING, allowNull:false}
})

Author.hasMany(Publication)
Publication.belongsTo(Author)

Author.hasMany(Mark)
Mark.belongsTo(Author)

Publication.hasMany(Mark)
Mark.belongsTo(Publication)

Theme.hasMany(Topic)
Topic.belongsTo(Theme)

Theme.hasMany(Publication)
Publication.belongsTo(Theme)

Language.hasMany(Dialect)
Dialect.belongsTo(Language)

Dialect.hasMany(Publication)
Publication.belongsTo(Dialect)

Region.hasMany(Publication)
Publication.belongsTo(Region)

Publicator.hasMany(Publication)
Publication.belongsTo(Publicator)

Type.hasMany(Publication)
Publication.belongsTo(Type)

module.exports = {
    Author,
    Mark,
    Type,
    Publication,
    Publicator,
    Language,
    Dialect,
    Theme,
    Topic,
    Region
}