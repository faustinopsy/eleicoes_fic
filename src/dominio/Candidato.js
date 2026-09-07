export class Candidato {
  constructor(id, nome, numero) {
    if (nome.length < 3) {
      throw new Error('nome precisa ter pelo menos 3 letras')
    }
    if (!/^[0-9]{2}$/.test(numero)) {
      throw new Error('numero precisa ter exatamente dois digitos')
    }
 
    this.id = id
    this.nome = nome
    this.numeroUrna = numero
  }
}
