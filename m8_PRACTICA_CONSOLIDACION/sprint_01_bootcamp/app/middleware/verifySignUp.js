// Que verifica si el correo ya se encuentra ingresado al momento de registrarse un nuevo usuario
const db = require('../models'); // Importa el objeto que contiene los modelos

exports.verifySignUp = async (email) => {
  try {
    const User = db.users; // Accede al modelo users a través del objeto db
    const user = await User.findOne({
      where: { email: email }
    });

    // Si user es null, significa que el correo no está registrado
    // Si user no es null, significa que el correo ya está registrado
    return user !== null;
  } catch (error) {
    console.error('Error al verificar el correo:', error);
    throw error;
  }
};
