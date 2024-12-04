import { describe, it, expect, beforeEach } from 'vitest';
import LoginController from 'src/controller/LoginController';

describe('Teste de Integração - Login e Logout (RF005 - RT033)', () => {
    let loginController;
  
    beforeEach(() => {
      // Inicializa o controlador antes de cada teste
      loginController = new LoginController();
    });
  
    it('deve impedir o acesso de usuários com credenciais inválidas', async () => {
      const email = 'aline.rodrigues.santoss2@gmail.com';
      const senha = 'SenhaErrada123'; // Credenciais inválidas
  
      const resultado = await loginController.realizarLogin(email, senha);
  
      // Verifica se o login falhou
      expect(resultado.success).toBe(false);
  
      // Verifica a mensagem de erro
      expect(resultado.mensagem).toBe('Credenciais incorretas. Tente novamente.');
  
      // Verifica que o redirecionamento é para a tela de login
      expect(resultado.redirectUrl).toBe('/login');
    });
  });