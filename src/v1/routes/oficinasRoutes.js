import express from 'express';
import OficinasController from '../../controllers/oficinasControllers.js';
// import passport from "passport";
// import { auth } from "../../middlewares/authMiddleware.js";
// import { Roles } from "../../utiles/roles.js"

const router = express.Router();

const oficinasController = new OficinasController();

router.get('/',oficinasController.buscarTodos);
router.get('/:idOficina',oficinasController.buscarPorId);
router.post('/',oficinasController.crear);
router.patch('/:idOficina',oficinasController.modificar);



export {router}; 