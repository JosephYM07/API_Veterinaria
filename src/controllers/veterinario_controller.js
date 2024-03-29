// Importar el modelo
import Veterinario from "../models/Veterinario.js"

// Crea diferentes metodos
// Metodo para el login
const login =(req,res)=>{
res.status(200).json({res:'login del veterinario'})
}
// Metodo para el login
const perfil=(req,res)=>{
res.status(200).json({res:'perfil del veterinario'})
}
// Metodo para el registro
const registro = async (req,res)=>{
// Desestructurar los campos
const {email,password} = req.body
// Validar todos los campos llenos
if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
// Obtener el usuario de la BDD en base al email
const verificarEmailBDD = await Veterinario.findOne({email})
// Validar que el email sea nuevo
if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
// Crear la instancia del nuevo veterinario
const nuevoVeterinario = new Veterinario(req.body)
// Encriptar el password
nuevoVeterinario.password = await nuevoVeterinario.encrypPassword(password)
// Crear el token => email
nuevoVeterinario.crearToken()
// Guardar en BDD
await nuevoVeterinario.save()
// Responder
res.status(200).json({nuevoVeterinario})
}
// Metodo para confirmar el token
const confirmEmail = (req,res)=>{
res.status(200).json({res:'confirmar email de registro de veterinario'})
}
// Metodo para listar veterinarios
const listarVeterinarios = (req,res)=>{
res.status(200).json({res:'lista de veterinarios registrados'})
}
// Metodo para el
const detalleVeterinario = (req,res)=>{
res.status(200).json({res:'detalle de un eterinario registrado'})
}
// Metodo para actualizar el perfil
const actualizarPerfil = (req,res)=>{
res.status(200).json({res:'actualizar perfil de un veterinario registrado'})
}
// Metodo para actualizar el password
const actualizarPassword = (req,res)=>{
res.status(200).json({res:'actualizar password de un veterinario registrado'})
}
// Metodo para recuperar el password
const recuperarPassword= (req,res)=>{
res.status(200).json({res:'enviar mail recuperación'})
}
// Metodo para recuperar el password con el token
const comprobarTokenPasword= (req,res)=>{
res.status(200).json({res:'verificar token mail'})
}
// Metodo para crear el nuevo password
const nuevoPassword= (req,res)=>{
res.status(200).json({res:'crear nuevo password'})
}
// Importar cada uno de los metodos
export {
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
nuevoPassword
}