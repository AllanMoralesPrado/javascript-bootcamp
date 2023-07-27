const db = require('./app/models')
const userController = require('./app/controllers/user.controller')
const bootcampController = require('./app/controllers/bootcamp.controller')
const { secret } = require('./app/config/auth.config');
const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');

app.use(express.json());
let corsOpt = { 
    origin: '*', // Se debe reemplazar el * por el dominio de nuestro front 
  optionsSuccessStatus: 200 // Es necesario para navegadores antiguos o algunos SmartTVs 
} 
app.use(cors(corsOpt));

const port = process.env.API_PORT || 8090;

const bcrypt = require('bcryptjs');

// Importar las rutas
const userRoutes = require('./app/routes/user.routes');
const bootcampRoutes = require('./app/routes/bootcamp.routes');

// Registrar las rutas
app.use('/api/user', userRoutes);
app.use('/api/bootcamp', bootcampRoutes);

const run = async () => {

  // Crear un Usuario
  const user1 = await userController.createUser({
    firstName: 'Mateo',
    lastName: 'Díaz',
    email: 'mateo.diaz@correo.com',
    password: bcrypt.hashSync("mateo123456"),
  })

  const user2 = await userController.createUser({
    firstName: 'Santiago',
    lastName: 'Mejias',
    email: 'santiago.mejias@correo.com',
    password: bcrypt.hashSync("santiago123456"),
  })

  const user3 = await userController.createUser({
    firstName: 'Lucas',
    lastName: 'Rojas',
    email: 'lucas.rojas@correo.com',
    password: bcrypt.hashSync("lucas123456"),
  })

  const user4 = await userController.createUser({
    firstName: 'Facundo',
    lastName: 'Fernández',
    email: 'facundo.fernandez@correo.com',
    password: bcrypt.hashSync("facundo123456"),
  })

  // Crear un Bootcamp
  const bootcamp1 = await bootcampController.createBootcamp({
    title: 'Introduciendo El Bootcamp De React',
    cue: 10,
    description: "React es la librería más usada en JavaScript para el desarrollo de interfaces",
  })

  const bootcamp2 = await bootcampController.createBootcamp({
    title: 'Bootcamp Desarrollo Web Full Stack',
    cue: 12,
    description: "Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares como JavaScript, nodeJS, Angular, MongoDB, ExpressJS",
  })

  const bootcamp3 = await bootcampController.createBootcamp({
    title: 'Bootcamp Big Data, Inteligencia Artificial & Machine Learning',
    cue: 12,
    description: "Domina Data Science todo el ecosistema de lenguajes y herramientas de Big Data e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning",
  })

  // Agregando usuarios a los Bootcamp
  await bootcampController.addUser(bootcamp1.id, user1.id);
  await bootcampController.addUser(bootcamp1.id, user2.id);
  await bootcampController.addUser(bootcamp2.id, user1.id);
  await bootcampController.addUser(bootcamp3.id, user1.id);
  await bootcampController.addUser(bootcamp3.id, user2.id);
  await bootcampController.addUser(bootcamp3.id, user3.id);
  await bootcampController.addUser(bootcamp3.id, user4.id);


  // Consultando el bootcamp(id) incluyendo los usuarios
  const _bootcamp1 = await bootcampController.findById(bootcamp1.id);
  console.log(" Bootcamp  ", JSON.stringify(_bootcamp1, null, 2));

  // Consultado  todos los bootcamp
  const bootcamps = await bootcampController.findAll();
  console.log(" Bootcamps: ", JSON.stringify(bootcamps, null, 2));

  // Consultado los usuarios (id) incluyendo los bootcamp
  const _user = await userController.findUserById(user1.id);
  console.log(" user1: ", JSON.stringify(_user, null, 2));

  // Listar todos los usuarios con sus bootcamp
  const users = await userController.findAll();
  console.log(">> usuarios: ", JSON.stringify(users, null, 2));

  // Actualización de usuario por id
  const user = await userController.updateUserById(user1.id, "Pedro", "Sánchez");
  const _user1 = await userController.findUserById(user1.id);
  console.log(" user1: ", JSON.stringify(_user1, null, 2));

  //Eliminar un usuario por id
  //const duser1 = await userController.deleteUserById(user1.id);
}

//db.sequelize.sync()
db.sequelize.sync({
  force: true
}).then(() => {
  console.log('Eliminando y resincronizando la base de datos.')
  run()
})

// POST /api/signup - Registro de un nuevo usuario, acceso público
app.post('/api/signup', async (req, res) => {
  try {
    // obteniendo los valores de entrada  
    const {
      firstName,
      lastName,
      email,
      password
    } = req.body;

    // Validar los datos de entrada 
    if (!(email && password && firstName && lastName)) {
      res.status(400).send("Todos los campos son requeridos");
    }

    // Encriptando la contraseña del usuario 
    //Generamos aleatoriamente el salt 
    const salt = await bcrypt.genSalt(10)
    console.log("Salt generado: " + salt);

    // Encriptando la contraseña del usuario 
    encryptedPassword = await bcrypt.hash(password, salt);
    console.log("\nPassword encriptado: " + encryptedPassword);

    // Creando el usuario en la bases de datos 
    const user = await userController.createUser({
      firstName,
      lastName,
      email: email.toLowerCase(), // Convertimos a minuscula  
      password: encryptedPassword,
    });

    // Creación del Token  
    const token = jwt.sign({
      user_id: user._id,
      email
    },
      secret, {
      expiresIn: "1h",
    }
    );

    // Token Generado  
    console.log("\nToken Generado: " + token);

    // retornamos el nuevo usuario 
    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
    return res.status(409).json({"message":"Conflicto"});
  }
});

// POST /api/signin - Inicio de sesión en la API, acceso público
app.post('/api/signin', async (req, res) => {
  // try {
  //     const user = await userController.signIn(req.body);
  //     res.json(user);
  // } catch (error) {
  //     console.error('Error en el inicio de sesión:', error);
  //     res.status(401).json({ message: 'Credenciales inválidas, inicio de sesión fallido' });
  // }
  // logica del registro  
  try {
    // obteniendo los datos de entrada 
    const {
      email,
      password
    } = req.body;

    // Validar los datos de entrada 
    if (!(email && password)) {
      res.status(400).send("Todos los datos son requeridos, email y password");
    }

    // Validando la existencia del usuario en la base de datos 
    const user = await db.users.findOne({
      email
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Se genera el Token 
      const token = jwt.sign({
        user_id: user._id,
        email
      },
        secret, {
        expiresIn: "1h",
      }
      );

      // Impresion por el terminal del Token generado para el usuario 
      console.log("Usuario: " + email + "\nToken: " + token);
      // Retornando los datos del usuario 
      return res.status(200).json(user);
    }
    return res.status(400).send("Credenciales invalidas");
  } catch (err) {
    console.log(err);
    return res.status(409).json({"message":"Conflict"});
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Escuchando peticiones en http://localhost:${port}`);
});