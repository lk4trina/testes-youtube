import { describe, it, expect, beforeEach } from 'vitest';
import LoginController from 'src/controller/LoginController';

describe('Teste de Integração - Login e Logout (RF005 - RT033)', () => {
    let loginController;
  
    beforeEach(() => {
      loginController = new LoginController();
    });
  
    it('deve impedir o acesso de usuários com credenciais inválidas', async () => {
      const email = 'aline.rodrigues.santoss2@gmail.com';
      const senha = 'SenhaErrada123'; 
  
      const resultado = await loginController.realizarLogin(email, senha);
  
      expect(resultado.success).toBe(false);
  
      expect(resultado.mensagem).toBe('Credenciais incorretas. Tente novamente.');
  
      expect(resultado.redirectUrl).toBe('/login');
    });
  });