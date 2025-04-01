//Leer variables de entorno para produccion del backend
export const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173'
export const PORT = process.env.PORT || 3001;

/*Lo mismo aplicarioa para variables de bases de datos por ejemplo:
y pueden ser los nombres que sean
    
export const DB_HOST = process.env.DB_HOST || localhost
export const DB_PORT = process.env.DB_PORT || 3306
export const DB_DATABASE = process.env.DB_DATABASE || plasticrecycler
export const DB_USER = process.env.DB_USER || root
export const DB_PASSWORD = process.env.DB_PASSWORD || ""
*/