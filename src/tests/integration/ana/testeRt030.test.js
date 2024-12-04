import { describe, it, expect, beforeEach, vi } from 'vitest';
import ModelUsuario from 'src/model//ModelUsuario'; // Importa a classe de usuário
import ControllerRestricao from 'src/controller//ControllerRestricao'; // Importa a classe de controle de restrições

describe('RT030 - Gerenciando modo restrito a partir da idade', () => {
  let controllerRestricao;
  let usuario;

  beforeEach(() => {
    // Criando uma nova instância de ControllerRestricao e ModelUsuario antes de cada teste
    controllerRestricao = new ControllerRestricao();
    usuario = new ModelUsuario(2, '2007-12-01'); // Usuário com 17 anos (menos de 18)
  });

  it('Deve ativar a restrição de idade para usuário menor de 18 anos', () => {
    // Mock de método para verificar se a idade do usuário é menor que 18 anos
    const idadeMock = vi.spyOn(usuario, 'calcularIdade').mockReturnValue(17); // Fakes a idade do usuário como 17 anos

    // Verifica se a restrição de conteúdo foi ativada para o usuário menor de 18 anos
    const resultadoRestricao = controllerRestricao.verificarRestricaoVideo(usuario);
    expect(resultadoRestricao).toBe(true); // Espera-se que o método retorne true, indicando que a restrição foi ativada

    // Consultando no banco simulado
    const restricaoNoBanco = controllerRestricao.consultarRestricaoNoBanco(usuario.getId());
    expect(restricaoNoBanco).toBe(true); // Verifica se a restrição foi registrada no "banco de dados" (Map)

    idadeMock.mockRestore(); // Restaura o método original de cálculo de idade
  });

  it('Não deve permitir acesso a conteúdo explícito para usuário menor de 18 anos', () => {
    const idadeMock = vi.spyOn(usuario, 'calcularIdade').mockReturnValue(17); // Fake de 17 anos

    // Verifica que a permissão para ver conteúdo restrito é falsa
    const permissao = controllerRestricao.verificarPermissaoIdade(usuario);
    expect(permissao).toBe(false); // A permissão deve ser false para usuários menores de 18 anos

    idadeMock.mockRestore(); // Restaura o método original de cálculo de idade
  });
});
