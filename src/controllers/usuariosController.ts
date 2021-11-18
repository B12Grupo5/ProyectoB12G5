import executeQuery from "../services/mysql.service";

const obtenerUsuarios = async (req, res, next) => {
    await executeQuery('SELECT * FROM usuarios').then(response => {
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null 
        };
        res.json(data);
    }).catch((error) => {
        next(error);
        //res.status(500).send(error);
    })
    //res.send('obtener canciones, respuesta desde el controlador');
}

const obtenerUsuario = async(req, res, next) => {

    console.log(req.params);
    const {usuario}=req.params;
    try {
        const response =await executeQuery(`SELECT * FROM usuarios WHERE usuario='${usuario}'`);
        console.log(response);
        response.length > 0 ? res.send(response) : res.send('usuario no encontrado');
    } catch (error) {
        next(error);
    }
    
    
    /*await executeQuery(`SELECT * FROM productos WHERE iD= ${req.params.id}`).then( response => {
        res.json(response);
    }).catch((error) => {
        res.status(500).send(error);
    })*/
    //res.send('obtener cancion, respuesta desde el controlador');
}

const agregarUsuario = async(req, res, next) => {
    const {usuario, identificacion, nombres, apellidos, direccion, telefono, email, ciudad, password}=req.body;
    try {
        const response= await executeQuery(`INSERT INTO usuarios (usuario, identificacion, nombres, apellidos, direccion, telefono, email, ciudad, password) VALUES('${usuario}', '${identificacion}', '${nombres}', '${apellidos}', '${direccion}', '${telefono}', '${email}', '${ciudad}', '${password}');`);
        res.status(201).json({message: response.affectedRows > 0 ? 'created' : `Usuario no creado`});
    } catch (error) {
        next(error);

    }
    
    
}

const actualizarUsuario = async(req, res, next) => {
    const {identificacion, nombres, apellidos, direccion, telefono, email, ciudad, password}=req.body;
    const {usuario}=req.params;
    
    try {
        const response= await executeQuery(`UPDATE usuarios SET identificacion='${identificacion}', nombres='${nombres}', apellidos='${apellidos}', direccion='${direccion}', telefono='${telefono}', email='${email}', ciudad='${ciudad}', password='${password}' WHERE usuario='${usuario}';`);
        res.json({message: response.affectedRows > 0 ? 'updated' : `No existe registro con usuario: ${usuario}`});
    } catch (error) {
        next(error);
    }
    
    
}

const eliminarUsuario = async (req, res, next) => {
    const {usuario}=req.params;
    await executeQuery(`DELETE FROM usuarios WHERE usuario='${usuario}';`).then(response => {
        res.json({message: response.affectedRows > 0 ? 'Deleted' : `No existe registro con usuario: ${usuario}`});
    }).catch((error) => {
        next(error);
    })
}

export { obtenerUsuarios , obtenerUsuario , agregarUsuario , actualizarUsuario , eliminarUsuario  }