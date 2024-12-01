import { describe, it, expect, beforeEach } from "vitest";
import VideoService from "src/services/VideoService";

describe("Criação do vídeo e gravação no banco de dados (RT026)", () => {
  let videoService;

  beforeEach(() => {
    videoService = new VideoService();
  });

//CT048
  it("deve criar e salvar um vídeo válido no banco de dados", () => {
    // Dados do novo vídeo
    const novoVideo = {
      titulo: "Meu primeiro vídeo",
      descricao: "Este é meu primeiro vídeo do canal",
      tags: ["educação", "tutorial"],
    };

    // Chamada do método e verificação
    const resultado = videoService.salvarVideo(novoVideo);
    const videosSalvos = videoService.listarVideos();

    expect(resultado).toBe("Vídeo salvo com sucesso");
    expect(videosSalvos.length).toBe(1);
    expect(videosSalvos[0]).toMatchObject({
      titulo: "Meu primeiro vídeo",
      descricao: "Este é meu primeiro vídeo do canal",
      tags: ["educação", "tutorial"],
    });
  });

  //CT049
  it("não deve salvar um vídeo com título vazio", () => {
    // Dados inválidos
    const videoInvalido = {
      titulo: "",
      descricao: "Este é meu primeiro vídeo do canal",
      tags: ["educação", "tutorial"],
    };

    // Verificação do erro
    expect(() => videoService.salvarVideo(videoInvalido)).toThrow(
      "Título do vídeo não pode estar em branco"
    );

    const videosSalvos = videoService.listarVideos();
    expect(videosSalvos.length).toBe(0); // Nenhum vídeo deve ter sido salvo
  });
});
