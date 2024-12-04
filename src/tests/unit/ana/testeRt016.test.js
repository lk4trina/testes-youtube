import { describe, it, beforeEach, expect } from "vitest";
import ControllerReproducao from "src/controller/ControllerReproducao"; 

describe("RT016: Reprodução de vídeo - Testes de reprodução de vídeo", () => {
  let controllerReproducao;

  beforeEach(() => {
    controllerReproducao = new ControllerReproducao(); 
  });

  // CT029: Reproduzir vídeo
  it("CT029: Deve reproduzir vídeo corretamente", () => {
    const id_video = 2; 

    const resultado = controllerReproducao.reproduzirVideo(id_video);

    expect(resultado).toBe(true);
    expect(controllerReproducao.videoReproduzindo.id_video).toBe(id_video);
  });

  // CT030: Adiantar vídeo
  it("CT030: Deve adiantar o vídeo em X segundos", () => {
    const id_video = 3; 
    const tempoAdiantar = 120; // Adiantar 2 minutos/120 segundos

    controllerReproducao.reproduzirVideo(id_video);
    const resultado = controllerReproducao.adiantarVideo(tempoAdiantar);

    expect(resultado).toBe(true);
    expect(controllerReproducao.videoReproduzindo.tempoAtual).toBe(120);
  });

  // CT031: Pausar vídeo
  it("CT031: Deve pausar o vídeo corretamente", () => {
    const id_video = 1; 

    controllerReproducao.reproduzirVideo(id_video);
    const resultado = controllerReproducao.pausarVideo();

    expect(resultado).toBe(true);
    expect(controllerReproducao.videoReproduzindo).toBeNull();
  });

});
