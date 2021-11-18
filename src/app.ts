//import express, { json } from 'express';
import express  from 'express';
import productosRoutes from './routes/productos';
import config from './config/config';
import usuariosRoutes from './routes/usuarios';
import errorHandler from './middlewares/errors';
import isAdmin from './middlewares/admin';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(isAdmin);
productosRoutes(app);
usuariosRoutes(app);
app.use(errorHandler);

app.get('/prueba/:id', async(req, res, next)=> {
    const datos={
        nombre: "Julian",
        apellido: "Rodriguez",
        genero: "Masculino"
    }

    const myarray = ["perro", "gato"];

    const [primero, segundo] = myarray;

    

    const { apellido, nombre}=datos;
    console.log(nombre);
    console.log(segundo);
    console.log(req.body)
    console.log(`antes de la promesa`)
    let x=10;
    const promesa = new Promise((resolve, reject ) => {
        if (x == 11){
            resolve(`La promesa se resuelve`);
        } else {
            reject(`Promesa rechazada`);
        }
    });

    await promesa.then(( respuesta) => {
        console.log(respuesta);
    }).catch(err => {
        console.log(err)
    })

    console.log(`despues de la promesa`);
    res.status(200).json({ message: apellido +" " + primero})
});



app.listen(config.PORT, () => {

    return console.log(`servidor corriendo en el puerto ${config.PORT}`);
});