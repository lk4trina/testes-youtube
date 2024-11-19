import assert from 'assert';
import { describe, it, beforeEach } from 'vitest';
import NotificacaoController from 'src/controller/NotificacaoController';

describe('NotificacaoController', () => {
  let notificacaoController;

  beforeEach(() => {
    notificacaoController = new NotificacaoController();
  });

  //CT004: Validar ativação notificações
  describe('ativarNotificacoes', () => {
    it('deve ativar notificações para um canal inscrito e atualizar o status para "ativadas"', () => {

      const canalId = '4040';
      notificacaoController.notificacoes = { [canalId]: 'desativadas' };

      notificacaoController.ativarNotificacoes(canalId);

      assert.strictEqual(notificacaoController.notificacoes[canalId], 'ativadas');
    });
  });

// CT005: Desabilitação de Notificações
  describe('desativarNotificacoes', () => {
    it('deve desativar notificações para um canal inscrito e atualizar o status para "desativadas"', () => {
      const canalId = '4040';
      notificacaoController.notificacoes = { [canalId]: 'ativadas' };

      notificacaoController.desativarNotificacoes(canalId);

      assert.strictEqual(notificacaoController.notificacoes[canalId], 'desativadas');
    });
  });
});
