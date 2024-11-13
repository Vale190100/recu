import express from "express";
import ReclamosControllers from "../../controllers/reclamosControllers.js";





const router = express.Router();

const reclamosControllers = new ReclamosControllers();


router.get("/", reclamosControllers.buscarTodos); 
router.get("/:idReclamo", reclamosControllers.buscarPorId); 
router.post('/', reclamosControllers.crear); 
router.patch("/:idReclamo", reclamosControllers.modificar); 





// router.get("/", auth([Roles.ADMIN]), reclamosControllers.buscarTodos); 
// // solo puede BUSCAR TODOS los reclamos el ADMINISTRADOR


// router.get("/buscar/:id?", auth([Roles.ADMIN]), reclamosControllers.buscarPorId); 
// // solo puede BUSCAR POR ID los reclamos el ADMINISTRADOR


// router.post('/', auth([Roles.CLIENTE]), reclamosControllers.crear); 
// // solo puede CREAR los reclamos el CLIENTE


// router.patch("/:id?", auth([Roles.ADMIN]), reclamosControllers.modificar); 
// // solo puede MODIFICAR los reclamos el ADMINISTRADOR


// router.post('/atender/:id?', auth([Roles.EMPLEADO]), reclamosControllers.atender); 
// // solo puede ATENDER los reclamos el EMPLEADO

export {router};