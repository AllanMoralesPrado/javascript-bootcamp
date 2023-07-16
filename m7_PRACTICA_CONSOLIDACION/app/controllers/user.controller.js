const {
    users
} = require('../models')
const db = require('../models')
const User = db.users
const Bootcamp = db.bootcamps

// Crear y Guardar Usuarios 
exports.createUser = (user) => {
    return User.create({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    })
        .then(user => {
            console.log(`>> Se ha creado el usuario: ${JSON.stringify(user,
                null, 4)}`)
            return user
        })
        .catch(err => {
            console.log(`>> Error al crear el usuario ${err}`)
        })
}

// obtener los bootcamps de un usuario 
exports.findUserById = (userId) => {
    return User.findByPk(userId, {
        include: [{
            model: Bootcamp,
            as: "bootcamps",
            attributes: ["id", "title"],
            through: {
                attributes: [],
            }
        },],
    })
        .then(users => {
            return users
        })
        .catch(err => {
            console.log(`>> Error mientras se encontraba los usuarios: 
  ${err}`)
        })
}

// obtener todos los Usuarios incluyendo los bootcamps 
exports.findAll = () => {
    return User.findAll({
        include: [{
            model: Bootcamp,
            as: "bootcamps",
            attributes: ["id", "title"],
            through: {
                attributes: [],
            }
        },],
    }).then(users => {
        return users
    })
}

// PATCH

// actualizar los datos de un usuario por id
exports.updateUserById = (userId, dataObject) => {
    return User.update(dataObject, {
        where: {
            id: userId
        }
    })
        .then(user => {
            return user
        })
        .catch(err => {
            console.log(`>> Error mientras se actualizaba el usuario: 
  ${err}`)
        })
}

// eliminar un usuario por id 
exports.deleteUserById = (userId) => {
    return User.destroy({
        where: {
            id: userId
        }
    })
        .then(user => {
            return user
        })
        .catch(err => {
            console.log(`>> Error mientras se eliminaba al usuario: 
  ${err}`)
        })
}