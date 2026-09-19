import { Router } from "express";
import { eleicao } from "../dominio/Eleicao.js";
import { exigirLogin } from '../middlewares/exigirLogin.js'

const painelRouter = Router()


painelRouter.get('/', exigirLogin, (req, res) => {
  res.render('painel', {
    titulo: 'Painel',
    usuario: req.session.usuario,
    relatorio: eleicao.apurar(),
  })
})

painelRouter.post('/cad-candidatos', exigirLogin, (req, res) => {
  const { nome, numero } = req.body
 
  try {
    eleicao.cadastrar(nome, numero)
  } catch (erro) {
    console.log('cadastro recusado:', erro.message)
  }
 
  res.redirect('/painel')
})

export default painelRouter