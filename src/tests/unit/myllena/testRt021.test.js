import { describe, it, expect, beforeEach } from "vitest";
import { ComentarioController } from "../../../controller/ComentarioController";

describe("ComentarioController - Moderação de Comentários", () => {
  let controller;
  const userID = "user123";
  const videoID = "video123";
  const comentarioApropriado = "Comentário apropriado";
  const comentarioInapropriado = "Comentário com palavrao1";

  beforeEach(() => {
    controller = new ComentarioController();
    controller.adicionarComentario(userID, videoID, 1, comentarioApropriado);
    controller.adicionarComentario(userID, videoID, 2, comentarioInapropriado);
  });

  it("deve listar todos os comentários de um vídeo", () => {
    const comentarios = controller.getComentarios(videoID);
    expect(comentarios).toHaveLength(2);
  });

  it("deve identificar um comentário inapropriado", () => {
    const comentarios = controller.getComentarios(videoID);
    const comentarioInapropriado = comentarios.find(
      (c) => c.comentario === "Comentário com palavrao1"
    );
    const isInapropriado = controller.isComentarioInapropriado(
      comentarioInapropriado
    );
    expect(isInapropriado).toBe(true);
  });

  it("deve remover um comentário inapropriado", () => {
    const sucesso = controller.removerComentario(2);
    expect(sucesso).toBe(true);
    const comentarios = controller.getComentarios(videoID);
    expect(comentarios).toHaveLength(1);
  });
});
