// scripts/candidatoDemo.js
// Testa a classe Candidato sem precisar subir o servidor.
import { Candidato } from '../src/dominio/Candidato.js'

const brutos = [
  { id: 1, nome: 'Ana Souza', numero: '10' },
  { id: 2, nome: 'Bruno Lima', numero: '20' },
  { id: 3, nome: 'Al', numero: '30' },
  { id: 4, nome: 'Carla Dias', numero: '007' },
]

for (const bruto of brutos) {
  try {
    const candidato = new Candidato(bruto.id, bruto.nome, bruto.numero)
    console.log('ok:      ', candidato.numeroUrna, candidato.nome)
  } catch (erro) {
    console.log('recusado:', bruto.nome, '->', erro.message)
  }
}
