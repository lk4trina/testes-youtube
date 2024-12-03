import { describe, it, expect, beforeEach } from "vitest";
import { ComentarioController } from "../../../controller/ComentarioController";

describe("ComentarioController - a=validação adicionar comentários(length)", () => {
  let controller;

  beforeEach(() => {
    controller = new ComentarioController();
  });

  it("deve adicionar um comentário válido", () => {
    const userID = 123;
    const videoID = "video001";
    const comentario = "Comentário de exemplo";

    const resultado = controller.adicionarComentario(
      userID,
      videoID,
      1,
      comentario
    );

    expect(resultado.comentario).toBe(comentario);
    expect(resultado.status).toBe("comentado");
    expect(controller.getComentarios(videoID).length).toBe(1);
  });

  it("deve retornar erro para comentário com menos de 2 caracteres", () => {
    const userID = 123;
    const videoID = "video001";
    const comentario = "A";

    expect(() =>
      controller.adicionarComentario(userID, videoID, 1, comentario)
    ).toThrow("O comentário deve ter no mínimo 2 caracteres.");

    expect(controller.getComentarios(videoID).length).toBe(0);
  });

  it("deve retornar erro para comentário com mais de 500 caracteres", () => {
    const userID = 123;
    const videoID = "video001";
    const comentario = "A".repeat(501);

    expect(() =>
      controller.adicionarComentario(userID, videoID, 2, comentario)
    ).toThrow("O comentário não pode exceder 500 caracteres.");

    expect(controller.getComentarios(videoID).length).toBe(0);
  });
});
