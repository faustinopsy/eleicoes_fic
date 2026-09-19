export class Candidato {
    constructor(id, nome, numero){
        if(nome.length < 3){
            throw new Error("Nome não pode ser menor que 3 caracteres")
        }
        // this = esta classe ou este contexto
        this.id = id
        this.nome = nome
        this.numero = numero
    }
    

}

/*
variáveis fora de classe
const nome = "rick"
let idade = 20

variáveis dentro de classe são atributos da classe
this.nome = "rick"
this.idade = 20
*/