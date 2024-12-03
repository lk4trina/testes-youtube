import { describe, it, expect, vi, beforeEach } from 'vitest';
import LoginController from 'src/controller/LoginController';
;

describe('Testes de Login', () => {
    let loginController;
  
   
    beforeEach(() => {
      loginController = new LoginController();
    });
  
    it('deve permitir login com credenciais válidas', async () => {
      const email = "aline.rodrigues.santoss2@gmail.com";
      const senha = "*********";  // Senha correta
  
      
      const resultado = await loginController.realizarLogin(email, senha);
  
     
      expect(resultado.success).toBe(true); 
      expect(resultado.redirectUrl).toBe('/tela-principal'); 
      expect(resultado.mensagem).toBe('Boas-vindas, Aline!');
    });
  
    
    it('não deve permitir login com senha incorreta', async () => {
      const email = "aline.rodrigues.santoss2@gmail.com";
      const senha = "senhaIncorreta";  
  
     
      const resultado = await loginController.realizarLogin(email, senha);
  
      
      expect(resultado.success).toBe(false); 
      expect(resultado.mensagem).toBe('Credenciais incorretas. Tente novamente.');
      expect(resultado.redirectUrl).toBe('/login'); 
    });
  });