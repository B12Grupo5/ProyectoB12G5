import { Router } from "express"
import { obtenerUsuarios, obtenerUsuario, agregarUsuario, actualizarUsuario,  eliminarUsuario } from "../controllers/usuariosController";

const usuariosRoutes = (app) => {
    const router = Router();
    app.use('/', router);
    router.get('/obtenerUsuarios', obtenerUsuarios);
    router.get('/obtenerUsuario/:usuario', obtenerUsuario);
    router.post('/agregarUsuario', agregarUsuario);
    router.put('/actualizarUsuario/:usuario', actualizarUsuario);
    router.delete('/eliminarUsuario/:usuario', eliminarUsuario);
    
}

export default usuariosRoutes;