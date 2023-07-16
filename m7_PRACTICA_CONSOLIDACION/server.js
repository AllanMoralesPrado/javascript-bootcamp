const db = require('./app/models')
const userController = require('./app/controllers/user.controller')
const bootcampController = require('./app/controllers/bootcamp.controller')

const run = async () => {
    // db.sequelize.sync() 
    db.sequelize.sync({
        force: true
    }).then(() => {
        console.log('Eliminando y resincronizando la base de datos.')
        run()
    })
};

(async function () {
    // Crear un Usuario 
    const user1 = await userController.createUser({
        firstName: 'Mateo',
        lastName: 'Díaz',
        email: 'mateo.diaz@correo.com'
    })

    const user2 = await userController.createUser({
        firstName: 'Santiago',
        lastName: 'Mejías',
        email: 'santiago.mejias@correo.com'
    })

    const user3 = await userController.createUser({
        firstName: 'Lucas',
        lastName: 'Rojas',
        email: 'lucas.rojas@correo.com'
    })

    const user4 = await userController.createUser({
        firstName: 'Facundo',
        lastName: 'Fernandez',
        email: 'facundo.fernandez@correo.com'
    })

    // Crear un bootcamp 
    const bootcamp1 = await bootcampController.createBootcamp({
        title: 'Introduciendo El Bootcamp De React.',
        cue: 10,
        description: 'React es la librería más usada en JavaScript para el desarrollo de interfaces.'
    })

    const bootcamp2 = await bootcampController.createBootcamp({
        title: 'Bootcamp Desarrollo Web Full Stack.',
        cue: 12,
        description: 'Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS.'
    })

    const bootcamp3 = await bootcampController.createBootcamp({
        title: 'Bootcamp Big Data, Inteligencia Artificial & Machine Learning.',
        cue: 18,
        description: 'Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning.'
    })

    await bootcampController.addUser(bootcamp1.id, user1.id);
    await bootcampController.addUser(bootcamp1.id, user2.id);
    await bootcampController.addUser(bootcamp2.id, user1.id);
    await bootcampController.addUser(bootcamp3.id, user1.id);
    await bootcampController.addUser(bootcamp3.id, user2.id);
    await bootcampController.addUser(bootcamp3.id, user3.id);

    // QUERYS
    /**
     * ADVERTENCIA: EL REQUERIMIENTO DE VALIDACIÓN DE VALORES PARA EL ATRIBUTO CUE DEL MODELO BOOTCAMP ES LA RAZÓN DE QUE NO SE PUEDAN CREAR DOS DE LOS REGISTROS SOLICITADOS, PROPAGANDO ERRORES EN LAS CONSULTAS RELACIONADAS CON ESOS REGISTROS 
     */

    // Consultado el bootcamp(id) incluyendo los usuarios 
    const _bootcamp1 = await bootcampController.findById(bootcamp1.id);
    console.log(" bootcamp  ", JSON.stringify(_bootcamp1, null, 2));

    // Listar todos los Bottcamp con sus usuarios
    const _bootcampAll = await bootcampController.findAll();
    console.log(" bootcamp  ", JSON.stringify(_bootcampAll, null, 2));

    //Consultar un usuario por id, incluyendo los Bootcamp
    const _user1 = await userController.findUserById(user3.id);
    console.log(" user  ", JSON.stringify(_user1, null, 2));

    //Listar los usuarios con sus Bootcamp
    const _userAll = await userController.findAll();
    console.log(" user  ", JSON.stringify(_userAll, null, 2));
    
    //Actualizar el usuario segun su id: actualizar el usuario con id=1 por Pedro Sánchez
    const _user2 = await userController.updateUserById(user1.id, {firstName: 'Pedro Sánchez'});
    console.log(" user  ", JSON.stringify(_user2, null, 2));

    //Comprobar cambios
    const _user2_ = await userController.findUserById(user1.id);
    console.log(" user  ", JSON.stringify(_user2_, null, 2));

    //Eliminar un usuario por id: eliminar el usuario con id=1
    const _user3 = await userController.deleteUserById(user1.id);
    console.log(" user  ", JSON.stringify(_user3, null, 2));

    //Comprobar cambios
    //Comprobar cambios
    const _user3_ = await userController.findUserById(user1.id);
    console.log(" user  ", JSON.stringify(_user3_, null, 2));

})();