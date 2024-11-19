import { describe, it, beforeEach, expect } from "vitest";
import VideoController from "src/controller/VideoController";

describe("VideoController - salvarProgresso e retomarProgresso", () => {
  let videoController;

  
  beforeEach(() => {
    videoController = new VideoController();
  });

  // CT008: Verificar o salvamento no início do vídeo (< 10 segundos)
  it("não deve salvar progresso se o tempo for menor que 10 segundos", () => {
    const tempoAtual = "0:05";
    const resultado = videoController.salvarProgresso(tempoAtual);
    expect(resultado).toBe(false); 
  });

  // CT009: Verificar o salvamento no meio do vídeo
  it("deve salvar e retomar o progresso no meio do vídeo", () => {
    const tempoAtual = "10:00";
    videoController.salvarProgresso(tempoAtual);

    const pontoSalvo = videoController.retomarProgresso();
    expect(pontoSalvo).toBe("10:00"); 
  });

  // CT010: Verificar o salvamento no final do vídeo
  it("deve salvar e retomar o progresso próximo ao final do vídeo", () => {
    const tempoAtual = "19:55"; 
    videoController.salvarProgresso(tempoAtual);

    const pontoSalvo = videoController.retomarProgresso();
    expect(pontoSalvo).toBe("19:55");
  });
});
