import { Router } from "express";
import { Usuario } from "../dominio/Usuario.js";
const loginRouter = Router()

const professor = new Usuario("professor", "1234")
 
loginRouter.get('/', (req, res) => {
  res.render('login', { titulo: 'Entrar', erro: null })
})
 
loginRouter.post('/', (req, res) => {
  const { login, senha } = req.body
 
  if (login !== professor.login || !professor.autenticar(senha)) {
    return res.render('login', {
      titulo: 'Entrar', erro: 'login ou senha invalidos' })
  }
 
  req.session.usuario = professor.login
  res.redirect('/painel')
})
 export default loginRouter 