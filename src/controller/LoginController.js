class LoginController {
  constructor() {
    this.usuarioAutenticado = false; 
  }

  async realizarLogin(email, senha) {
    if (email === "aline.rodrigues.santoss2@gmail.com" && senha === "*********") {
      this.usuarioAutenticado = true;
      return {
        success: true,
        redirectUrl: '/tela-principal', 
        mensagem: 'Boas-vindas, Aline!'
      };
    } 
      return {
        success: false,
        mensagem: 'Credenciais incorretas. Tente novamente.',
        redirectUrl: '/login' 
      };
  }
}

export default LoginController;

  