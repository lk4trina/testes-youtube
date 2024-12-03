class LoginController {
    async realizarLogin(email, senha) {
      // Simulando um processo de login (pode ser substituído por chamadas reais a APIs)
      if (email === "aline.rodrigues.santoss2@gmail.com" && senha === "*********") {
        return {
          success: true,
          redirectUrl: '/tela-principal', // Redireciona para a tela principal
          mensagem: 'Boas-vindas, Aline!'
        };
      } else {
        return {
          success: false,
          mensagem: 'Credenciais incorretas. Tente novamente.',
          redirectUrl: '/login' // Fica na tela de login
        };
      }
    }
  }
  
  export default LoginController;
  