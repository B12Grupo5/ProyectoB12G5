import executeQuery from "../services/mysql.service";

const obtenerProductos = async (req, res) => {
    await executeQuery('SELECT * FROM productos').then(response => {
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null 
        };
        res.json(data);
    }).catch((error) => {
        res.status(500).send(error);
    })
    //res.send('obtener canciones, respuesta desde el controlador');
}

const obtenerProducto = async(req, res) => {
    try {
        const response =await executeQuery(`SELECT * FROM productos WHERE iD= ${req.params.id}`);
        res.send(response);
    } catch (error) {
        res.status(500).send(error);
    }
    
    
    /*await executeQuery(`SELECT * FROM productos WHERE iD= ${req.params.id}`).then( response => {
        res.json(response);
    }).catch((error) => {
        res.status(500).send(error);
    })*/
    //res.send('obtener cancion, respuesta desde el controlador');
}

const agregarProducto = (req, res) => {
    res.send('agregar cancion, respuesta desde el controlador');
}

const actualizarProducto = (req, res) => {
    res.send('actualizar cancion, respuesta desde el controlador');
}

const eliminarProducto = (req, res) => {
    res.send('eliminar cancion, respuesta desde el controlador');
}

export { obtenerProductos , obtenerProducto , agregarProducto , actualizarProducto , eliminarProducto  }