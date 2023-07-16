// --- Configuración de conexión a la BDD ---
module.exports = { 
    HOST: 'localhost', 
    USER: 'postgres', 
    PASSWORD: 'dbz2023mngmnt', 
    DB: 'db_bootcamp', 
    dialect: 'postgres', 
    pool: { 
      max: 5, 
      min: 0, 
      acquire: 30000, 
      idle: 10000 
    } 
}