//import express, { json } from 'express';
import express  from 'express';
import productosRoutes from './routes/productos';
import config from './config/config';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
productosRoutes(app);
app.get('/prueba/:id', async(req, res, next)=> {
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
    res.status(200).json({ message: 'todo ok'})
});



app.listen(config.PORT, () => {

    return console.log(`servidor corriendo en el puerto ${config.PORT}`);
});