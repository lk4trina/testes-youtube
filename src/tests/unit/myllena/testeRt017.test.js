import { describe, it, expect, beforeEach } from "vitest";
import { CurtidaController } from "../../../controller/CurtidaController";

describe("CurtidaController", () => {
  let controller;

  beforeEach(() => {
    controller = new CurtidaController();
  });

  it('deve alterar o status para "true" ao curtir um vídeo', () => {
    const videoId = "12345";

    controller.curtirVideo(videoId);
    expect(controller.getStatus(videoId)).toBe(true);
  });

  it('deve alterar o status para "false" ao remover a curtida', () => {
    const videoId = "12345";

    controller.curtirVideo(videoId);

    controller.removerCurtida(videoId);

    expect(controller.getStatus(videoId)).toBe(false);
  });
;
});
