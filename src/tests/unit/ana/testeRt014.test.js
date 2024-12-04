import { describe, it, beforeEach, expect } from "vitest";
import ControllerHistorico from "src/controller/ControllerHistorico"; 

describe("RT014: Histórico de vídeos assistidos - Testes do método de histórico de vídeos", () => {
  let controllerHistorico;

  beforeEach(() => {
    controllerHistorico = new ControllerHistorico();
  });

  // CT025: Exibir o histórico de vídeos assistidos
  it("CT025: Deve exibir o histórico de vídeos do usuário", () => {
    const id_usuario = 1;
    const resultado = controllerHistorico.consultarHistorico(id_usuario);
    expect(resultado).toEqual([
      { id_video: 1, nome: "Introdução à Programação" },
      { id_video: 2, nome: "JavaScript para Iniciantes" },
      { id_video: 3, nome: "Aprendendo React" },
      { id_video: 4, nome: "Desenvolvimento Web" },
      { id_video: 5, nome: "Técnicas Avançadas de Programação" },
    ]);
  });

  // CT026: Permitir remover um vídeo específico do histórico
  it("CT026: Deve remover um vídeo específico do histórico", () => {
    const id_usuario = 1;
    const id_video = 5;
    const resultado = controllerHistorico.removerVideo(id_usuario, id_video);
    expect(resultado).toBe("Vídeo removido com sucesso.");

    const historicoAtualizado = controllerHistorico.consultarHistorico(id_usuario);
    expect(historicoAtualizado).toEqual([
      { id_video: 1, nome: "Introdução à Programação" },
      { id_video: 2, nome: "JavaScript para Iniciantes" },
      { id_video: 3, nome: "Aprendendo React" },
      { id_video: 4, nome: "Desenvolvimento Web" },
    ]);
  });

  // CT027: Permitir limpar o histórico de vídeos
  it("CT027: Deve limpar todo o histórico de vídeos do usuário", () => {
    const id_usuario = 1;
    const resultado = controllerHistorico.limparVideosHistorico(id_usuario);
    expect(resultado).toBe("Histórico de vídeos limpo com sucesso.");

    const historicoVazio = controllerHistorico.consultarHistorico(id_usuario);
    expect(historicoVazio).toEqual([]);
  });
});
