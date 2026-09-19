// scripts/eleicaoDemo.js
import { Eleicao } from '../src/dominio/Eleicao.js'

const eleicao = new Eleicao()

function tentarCadastrar(nome, numero) {
  try {
    eleicao.cadastrar(nome, numero)
    console.log('ok:      ', numero, nome)
  } catch (erro) {
    console.log('recusado:', nome, '->', erro.message)
  }
}

tentarCadastrar('Ana Souza', '10')
tentarCadastrar('Bruno Lima', '20')
tentarCadastrar('Carla Dias', '10')

eleicao.registrarVoto(1)
eleicao.registrarVoto(1)
eleicao.registrarVoto(2)

console.table(eleicao.apurar())
