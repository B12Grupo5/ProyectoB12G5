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

    console.log(req.params);
    const {id}=req.params;
    try {
        const response =await executeQuery(`SELECT * FROM productos WHERE iD= ${id}`);
        console.log(response);
        response.length > 0 ? res.send(response) : res.send('iD no encontrado')
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

const agregarProducto = async(req, res) => {
    const {nombre_producto, descripcion, valor, categoria, cantidad_disponible, usuario_vendedor}=req.body;
    try {
        const response= await executeQuery(`INSERT INTO productos (nombre_producto, descripcion, valor, categoria, cantidad_disponible, usuario_vendedor) VALUES ('${nombre_producto}', '${descripcion}', '${valor}', '${categoria}', '${cantidad_disponible}', '${usuario_vendedor}');`);
        res.status(201).json({message: 'created', id: response.insertId});
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
    
    
}

const actualizarProducto = async(req, res) => {
    const {nombre_producto, descripcion, valor, categoria, cantidad_disponible, usuario_vendedor}=req.body;
    const {id}=req.params;
    
    try {
        const response= await executeQuery(`UPDATE productos SET nombre_producto='${nombre_producto}', descripcion='${descripcion}', valor=${valor}, categoria='${categoria}', cantidad_disponible=${cantidad_disponible}, usuario_vendedor='${usuario_vendedor}' WHERE Id=${id};`);
        res.json({message: response.affectedRows > 0 ? 'updated' : `No existe registro con id: ${id}`});
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
    
    
}

const eliminarProducto = async (req, res) => {
    const {id}=req.params;
    await executeQuery(`DELETE FROM productos WHERE Id=${id};`).then(response => {
        res.json({message: response.affectedRows > 0 ? 'Deleted' : `No existe registro con id: ${id}`});
    }).catch((error) => {
        res.status(500).send(error);
    })
}

export { obtenerProductos , obtenerProducto , agregarProducto , actualizarProducto , eliminarProducto  }