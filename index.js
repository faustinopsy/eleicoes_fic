import express from 'express'
import candidatoRouter from './src/routes/candidatoRouter.js'
import candidatoViewRouter from './src/routes/candidatoViewRouter.js'
import path from 'node:path'
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(path.resolve(), 'src', 'views'))
app.use(express.json())
//      chave base da url
app.use('/api', candidatoRouter)
app.use('/', candidatoViewRouter)


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})