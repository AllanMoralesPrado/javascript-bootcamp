const {
    users,
    bootcamps
} = require('../models')
const db = require('../models')
const Bootcamp = db.bootcamps
const User = db.users

// Crear y guardar un nuevo bootcamp 
exports.createBootcamp = (bootcamp) => {
    return Bootcamp.create({
        title: bootcamp.title,
        cue: bootcamp.cue,
        description: bootcamp.description
    })
        .then(bootcamp => {
            console.log(`>> Creado el bootcamp: ${JSON.stringify(bootcamp,null, 4)}`)
            return bootcamp
        })
        .catch(err => {
            console.log(`>> Error al crear el bootcamp: ${err}`)
        })
}

// Agregar un Usuario al Bootcamp 
exports.addUser = (bootcampId, userId) => {
    return Bootcamp.findByPk(bootcampId)
        .then((bootcamp) => {
            if (!bootcamp) {
                console.log("No se encontro el bootcamp!");
                return null;
            }
            return User.findByPk(userId).then((user) => {
                if (!user) {
                    console.log("Usuario no encontrado!");
                    return null;
                }
                bootcamp.addUser(user);
                console.log('***************************')
                console.log(`>> Agregado el usuario id=${user.id} al bootcamp con id=${bootcamp.id}`);
                console.log('***************************')
                return bootcamp;
            });
        })
        .catch((err) => {
            console.log(">> Error mientras se estaba agregando Usuario al Bootcamp", err); 
          });
};


// obtener los bootcamps por id  
exports.findById = (Id) => {
    return Bootcamp.findByPk(Id, {
        include: [{
            model: User,
            as: "users",
            attributes: ["id", "firstName"],
            through: {
                attributes: [],
            }
        },],
    })
        .then(bootcamp => {
            return bootcamp
        })
        .catch(err => {
            console.log(`>> Error mientras se encontraba el bootcamp: ${err}`)
        })
}

// obtener todos los bootcamps incluyendo los usuarios 
exports.findAll = () => {
    return Bootcamp.findAll({
        include: [{
            model: User,
            as: "users",
            attributes: ["id", "firstName"],
            through: {
                attributes: [],
            }
        },],
    }).then(bootcamps => {
        return bootcamps
    }).catch((err) => {
        console.log(">> Error Buscando los bootcamps: ", err);
    });
}