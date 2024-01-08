// Importar express
import {Router} from 'express'
import {
login,
perfil,
registro,
confirmEmail,
listarVeterinarios,
detalleVeterinario,
actualizarPerfil,
actualizarPassword,
recuperarPassword,
comprobarTokenPasword,
nuevoPassword,
} from "../controllers/veterinario_controller.js"
// Crear una instancia router()
const router = Router()

// Definir las rutas
router.post("/login", login);
router.post("/registro", registro);
router.get("/confirmar/:token", confirmEmail);
router.get("/veterinarios", listarVeterinarios);
router.get("/recuperar-password", recuperarPassword);
router.get("/recuperar-password/:token", comprobarTokenPasword);
router.post("/nuevo-password/:token", nuevoPassword);

router.get("/perfil", perfil);
router.put('/veterinario/actualizarpassword',actualizarPassword)
router.get("/veterinario/:id", detalleVeterinario);
router.put("/veterinario/:id", actualizarPerfil);

// Exportar la variable router
export default router