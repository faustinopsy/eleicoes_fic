import { Candidato } from './Candidato.js'
 
class Eleicao {
  constructor() {
    this.candidatos = []
    this.votos = []
  }
 
  cadastrar(nome, numero) {
    const jaExiste = this.candidatos.find((candidato) => candidato.numeroUrna === numero)
 
    if (jaExiste) {
      throw new Error(`o numero ${numero} ja esta em uso`)
    }
 
    const id = this.candidatos.length + 1
    const candidato = new Candidato(id, nome, numero)
 
    this.candidatos.push(candidato)
 
    return candidato
  }
    registrarVoto(candidatoId) {
    this.votos.push({ id: this.votos.length + 1, candidatoId })
  }
 
  apurar() {
    return this.candidatos.map((candidato) => {
      const recebidos = this.votos.filter((vt) => vt.candidatoId === candidato.id)
 
      return {
        numeroUrna: candidato.numeroUrna,
        nome: candidato.nome,
        votos: recebidos.length,
      }
    })
  }
 
  listar() {
    return this.candidatos
  }
  buscar(numero) {
    return this.candidatos.find((candidato) => candidato.numeroUrna === numero)
  }


}

export const eleicao = new Eleicao()