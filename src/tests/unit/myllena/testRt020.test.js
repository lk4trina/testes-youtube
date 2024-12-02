import { describe, it, expect, beforeEach } from "vitest";
import VideoController from "../../../controller/VideoController";

describe("VideoController - Ajuste Automático da Qualidade", () => {
  let controller;

  beforeEach(() => {
    controller = new VideoController();
  });

  it("deve ajustar automaticamente a qualidade para alta em conexão de alta velocidade", () => {
    const qualidade = controller.ajustarQualidadeAutomaticamente("alta");
    expect(qualidade).toBe("1080p");
  });

  it("deve ajustar automaticamente a qualidade para baixa em conexão de baixa velocidade", () => {
    const qualidade = controller.ajustarQualidadeAutomaticamente("baixa");
    expect(qualidade).toBe("480p");
  });

  it("deve desativar o ajuste automático e manter a qualidade definida pelo usuário", () => {
    controller.desativarAjusteAutomatico();
    controller.definirQualidade("1080p");

    const qualidadeAlta = controller.ajustarQualidadeAutomaticamente("baixa");
    expect(qualidadeAlta).toBe("1080p");

    const qualidadeMedia = controller.ajustarQualidadeAutomaticamente("alta");
    expect(qualidadeMedia).toBe("1080p");
  });
});
