import express from 'express';
import Express  from 'express';

const app = express();
const port = 3000;

app.get('/', (req,res)=> {
    res.send(`prueba servidor`)
});
app.listen(port, ()=> {
    return console.log(`servidor corriendo en el puerto ${port}`);
});