import express from "express";
// import Usuarios from "../../controllers/usuariosControllers.js"
import UsuariosControllers from "../../controllers/usuariosControllers.js";
// import { auth } from "../../middlewares/authMiddleware.js";
// import { Roles } from "../../utiles/roles.js"

const router = express.Router();

const usuariosControllers = new UsuariosControllers();

router.get('/', usuariosControllers.buscarTodos);
router.get('/:idUsuario', usuariosControllers.buscarPorId);
router.post('/', usuariosControllers.crear);
router.patch('/:idUsuario', usuariosControllers.modificar);

export {router};