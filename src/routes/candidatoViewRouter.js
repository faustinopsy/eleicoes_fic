import { Router } from "express";
import { eleicao } from "../dominio/Eleicao.js";

const candidatoViewRouter = Router();

candidatoViewRouter.get('/candidatos', (req, res) => {
  //  
  res.render('home', 
    {
     titulo : 'Lista de Candidatos xxxx',
    candidatos : eleicao.listar()
    }
)
})

candidatoViewRouter.get('/candidato/:id', (req, res) => {
    const numero = parseInt(req.params.id)
    const candidato = eleicao.buscar(numero)
    console.log('candidato encontrado:', candidato)

    if (!candidato) {
      return res.status(404).send('Candidato não encontrado')
    }

    res.render('candidato', { candidato })
})

export default candidatoViewRouter  