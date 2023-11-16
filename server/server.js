import express from 'express'

const app = express()

app.post('/registration', (req, res) => {
  res.json({status: 'registro realizado com sucesso'}).end()
})

export default function expressPlugin() {
  return {
    name: 'express-plugin',
    configureServer(server) {
      server.middlewares.use(app)
    }
  }
}