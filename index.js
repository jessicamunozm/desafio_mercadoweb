const express = require ('express')
const exphbs = require ('express-handlebars')
const app = express()
const port = 3000

// configuración motor de plantilla handlebars
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')
app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs'
 }))

// estáticas
app.use(express.static('assets'))

// 5. Consumir los códigos fuentes de Bootstrap y jQuery a través de rutas o middlewares 
// creados en el servidor. Estas dependencias deben ser instaladas con NPM.
app.use('/bootstrap', express.static('node_modules/bootstrap/dist/css/bootstrap.css'))
app.use('/jquery', express.static('node_modules/jquery/dist/jquery.js'))

// 1. Ruta raíz => que al ser consultada renderice una vista con un parcial “Dashboard” 
// enviándole en el render un arreglo con los nombres de los productos. Se recomienda que estos 
// coincidan con las imágenes de cada producto.
app.get('/', (req, res) => {
    res.render('home', {
        products: ['Plátano', 'Cebolla', 'Pimentón', 'Papas', 'Lechuga', 'Tomate']
     })
})

app.listen(port, () => { 
    console.log(`http://localhost:${port}`)
})
