class LoginController {
  constructor() {
    this.usuarioAutenticado = false; // Estado de autenticação do usuário
  }

  async realizarLogin(email, senha) {
    if (email === "aline.rodrigues.santoss2@gmail.com" && senha === "*********") {
      this.usuarioAutenticado = true; // Define o usuário como autenticado
      return {
        success: true,
        redirectUrl: '/tela-principal', // Redireciona para a tela principal
        mensagem: 'Boas-vindas, Aline!'
      };
    } 
      return {
        success: false,
        mensagem: 'Credenciais incorretas. Tente novamente.',
        redirectUrl: '/login' // Fica na tela de login
      };
  }
}

export default LoginController;

  