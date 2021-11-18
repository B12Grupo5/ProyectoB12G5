import { Router } from "express"
import { actualizarProducto, agregarProducto, eliminarProducto, obtenerProducto,  obtenerProductos } from "../controllers/productosController";
import isAdmin from "../middlewares/admin";

const productosRoutes = (app) => {
    const router = Router();
    app.use('/', router);
    //router.get('/obtenerProductos', obtenerProductos, errorHandler);
    router.get('/obtenerProductos', isAdmin, obtenerProductos);
    router.get('/obtenerProducto/:id', obtenerProducto);
    router.post('/agregarProducto', agregarProducto);
    router.put('/actualizarProducto/:id', actualizarProducto);
    router.delete('/eliminarProducto/:id', eliminarProducto);
    
}

export default productosRoutes;