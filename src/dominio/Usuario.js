export class Usuario {
  constructor(login, senha) {
    this.login = login
    this.senha = senha
  }
 
  autenticar(senhaDigitada) {
    return senhaDigitada === this.senha
  }
}
 
