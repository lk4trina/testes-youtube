import assert from 'assert'; // Importando a biblioteca de assert
import { describe, it, beforeEach } from 'vitest';
import NotificacaoController from 'src/controller/NotificacaoController';

describe('NotificacaoController', () => {
  let notificacaoController;

  // Pré-condição: Criar uma nova instância da classe antes de cada teste
  beforeEach(() => {
    notificacaoController = new NotificacaoController();
  });

  describe('ativarNotificacoes', () => {
    it('deve ativar notificações para um canal inscrito e atualizar o status para "ativadas"', () => {
      // Estado inicial simulado
      const canalId = '4040';
      notificacaoController.notificacoes = { [canalId]: 'desativadas' };

      notificacaoController.ativarNotificacoes(canalId);

      assert.strictEqual(notificacaoController.notificacoes[canalId], 'ativadas');
    });
  });

  describe('desativarNotificacoes', () => {
    it('deve desativar notificações para um canal inscrito e atualizar o status para "desativadas"', () => {
      const canalId = '4040';
      notificacaoController.notificacoes = { [canalId]: 'ativadas' };

      notificacaoController.desativarNotificacoes(canalId);

      assert.strictEqual(notificacaoController.notificacoes[canalId], 'desativadas');
    });
  });
});
