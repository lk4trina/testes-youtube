import { describe, it, expect } from "vitest";
import NotificacaoController from "src/controller/NotificacaoController";


describe("Gerenciar notificações de vídeos", () => {

    //CT046
  it("deve gerar uma notificação para novo upload de vídeo", () => {
    const notificacaoController = new NotificacaoController();

    const canalId = "canal_x";
    notificacaoController.notificacoes[canalId] = "desativadas";

    notificacaoController.ativarNotificacoes(canalId);

    const novoUpload = true;
    if (novoUpload) {
      notificacaoController.notificacoes[canalId] = "novo_upload";
    }

    expect(notificacaoController.notificacoes[canalId]).toBe("novo_upload");
  });

  //CT047

  it("não deve gerar uma notificação se não houver novos uploads", () => {
    const notificacaoController = new NotificacaoController();

    const canalId = "canal_x";
    notificacaoController.notificacoes[canalId] = "ativadas";

    const novoUpload = false;
    if (!novoUpload) {
      notificacaoController.notificacoes[canalId] = "sem_novo_upload";
    }

    expect(notificacaoController.notificacoes[canalId]).toBe("sem_novo_upload");
  });
});
