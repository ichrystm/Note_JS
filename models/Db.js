
const Sequelize = require ('sequelize')

const sequelize = new Sequelize('postapp', 'root', 'Pripyat@123', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
}