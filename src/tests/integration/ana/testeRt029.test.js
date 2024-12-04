import { describe, it, beforeEach, expect } from "vitest";
import ControllerReproducao from "src/controller/ControllerReproducao";
import ControllerGerenciadorMidia from "src/controller/ControllerGerenciadorMidia"; 

describe("RT029: Exibir vídeo - Testes de Integração de Exibição de Vídeos", () => {
  let controllerReproducao;
  let gerenciadorMidia;

  beforeEach(() => {
    gerenciadorMidia = new ControllerGerenciadorMidia();
    controllerReproducao = new ControllerReproducao();
  });

  // CT052: Exibição de Vídeos: Mensagem de Erro ao Carregar Vídeos
  it("CT052: Deve exibir mensagem de erro se o vídeo estiver indisponível", () => {
    const id_videoIndisponivel = 2; // Vídeo com status "indisponível"

    const resultado = controllerReproducao.iniciarReproducao(id_videoIndisponivel);

    // Verificar se a mensagem de erro está correta
    expect(resultado).toBe("Erro: Vídeo indisponível.");
    expect(controllerReproducao.estaReproduzindo()).toBe(false); // O vídeo não deve começar a ser reproduzido
  });

  // CT052: Teste de vídeo disponível
  it("CT052: Deve iniciar reprodução se o vídeo estiver disponível", () => {
    const id_videoDisponivel = 1; // Vídeo com status "disponível"

    const resultado = controllerReproducao.iniciarReproducao(id_videoDisponivel);

    // Verificar se a reprodução foi iniciada com sucesso
    expect(resultado).toBe("Reprodução iniciada com sucesso.");
    expect(controllerReproducao.estaReproduzindo()).toBe(true); // O vídeo deve começar a ser reproduzido
  });
});
