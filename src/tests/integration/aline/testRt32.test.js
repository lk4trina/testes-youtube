import { describe, it, expect, beforeEach } from 'vitest';
import LoginController from 'src/controller/LoginController';

describe('Teste de Integração - Login (RF002 - RT032)', () => {
  let loginController;

  beforeEach(() => {
    loginController = new LoginController();
  });

  it('deve autenticar o usuário com credenciais válidas', async () => {
    const email = 'aline.rodrigues.santoss2@gmail.com';
    const senha = '*********';

    const resultado = await loginController.realizarLogin(email, senha);

    expect(resultado.success).toBe(true);
    expect(resultado.redirectUrl).toBe('/tela-principal');
    expect(resultado.mensagem).toBe('Boas-vindas, Aline!');
  });

  it('não deve autenticar o usuário com senha incorreta', async () => {
    const email = 'aline.rodrigues.santoss2@gmail.com';
    const senha = 'senhaIncorreta';

    const resultado = await loginController.realizarLogin(email, senha);

    expect(resultado.success).toBe(false);
    expect(resultado.redirectUrl).toBe('/login');
    expect(resultado.mensagem).toBe('Credenciais incorretas. Tente novamente.');
  });

  it('não deve autenticar o usuário com email incorreto', async () => {
    const email = 'email.errado@gmail.com';
    const senha = '*********';

    const resultado = await loginController.realizarLogin(email, senha);


    expect(resultado.success).toBe(false);
    expect(resultado.redirectUrl).toBe('/login');
    expect(resultado.mensagem).toBe('Credenciais incorretas. Tente novamente.');
  });
});