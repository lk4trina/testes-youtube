import { describe, it, beforeEach, expect } from "vitest";
import ControllerCompartilhamento from "src/controller/ControllerCompartilhamento"; 

describe("RT015: Compartilhamento de vídeo - Testes do compartilhamento de vídeos", () => {
  let controllerCompartilhamento;

  beforeEach(() => {
    controllerCompartilhamento = new ControllerCompartilhamento(); 
  });

  // CT028: Compartilhar vídeo
  it("CT028: Deve compartilhar um vídeo e gerar um link válido", () => {
    const usuario_id = 1; // Usuário autenticado
    const video_id = 2; // ID do vídeo a ser compartilhado

    const resultado = controllerCompartilhamento.compartilharVideo(usuario_id, video_id);

    expect(resultado).toContain("Compartilhado com sucesso!");
    expect(resultado).toContain("Link de compartilhamento: https://meusvideos.com/video/2/compartilhar");
    expect(resultado).toContain("Opções: Compartilhar via Facebook, Twitter, ou Instagram.");
  });
});
