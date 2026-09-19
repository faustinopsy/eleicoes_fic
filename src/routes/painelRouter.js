import { Router } from 'express'
import { Eleicao } from '../dominio/Eleicao.js'
import { exigirLogin } from '../middlewares/exigirLogin.js'

const painelRouter = Router()

painelRouter.get('/', exigirLogin, (req, res)=>{
    const eleicao = new Eleicao()
    res.render('painel', {
        titulo: 'Painel Administrativo',
        usuario: req.session.usuarioLogado,
        relatorio: eleicao.apurarVotos()
    })
})

painelRouter.post('/cad-candidato', exigirLogin, (req, res) => {
    const { nome, numero } = req.body
    const eleicao = new Eleicao()
    //faça
    try{
        eleicao.cadastrar(nome, numero)
    //nao conseguiu fazer
    }catch(e){
        console.error(e)
    }
    res.redirect('/painel')

})

function soma(){}

export default painelRouter