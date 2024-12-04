import { describe, it, beforeEach, expect, vi } from "vitest";
import ControllerCompartilhamento from "src/controller/ControllerCompartilhamento"; 

describe("RT027: Gerenciar compartilhamentos - Testes de Integração: Compartilhamento de vídeo", () => {
  let controllerCompartilhamento;
  let enviarParaRedeSocialMock;

  beforeEach(() => {
    controllerCompartilhamento = new ControllerCompartilhamento(); 
    // Mock da função 'enviarParaRedeSocial' para simular a integração com redes sociais
    enviarParaRedeSocialMock = vi.spyOn(controllerCompartilhamento, 'enviarParaRedeSocial').mockReturnValue(true);
  });

  // CT050: Compartilhamento de vídeo com redes sociais
  it("CT050: Deve compartilhar vídeo com a rede social selecionada", () => {
    const rede_social = "Facebook"; 
    const usuario_id = 1;
    const video_id = 2; 

    // Chama o método de compartilhamento de vídeo
    const resultado = controllerCompartilhamento.compartilharVideo(usuario_id , video_id);

    // Verifica se o método enviarParaRedeSocial foi chamado com os parâmetros corretos
    expect(enviarParaRedeSocialMock).toHaveBeenCalledWith(rede_social, video_id);
    // Verifica se o resultado foi verdadeiro
    expect(resultado).toBe(true);
  });

});
