import express from 'express'
import morgan from 'morgan'
import { engine } from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url'
import sass from 'node-sass'
import route from './routes/index.js'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const app = express()
const port = 3000

//
app.use(express.static(path.join(__dirname, 'public')))

app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())

//HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine('hbs', engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

route(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
