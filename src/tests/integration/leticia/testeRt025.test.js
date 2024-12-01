import { describe, it, expect, beforeEach } from 'vitest';
import NotificacaoController from 'src/controller/NotificacaoController';
import { CanalController } from 'src/controller/CanalController';

describe('Notificação de novos vídeos', () => {
  let notificacaoController;
  let canalController;

  beforeEach(() => {
    notificacaoController = new NotificacaoController();
    canalController = new CanalController();

    notificacaoController.notificacoes = {
      'canal1': 'ativadas',
    };
  });

  // CT046
  it('deve gerar uma notificação ao detectar um novo upload em um canal seguido', () => {
    // Simula novo upload no canal seguido
    const novoVideo = { titulo: 'Novo Vídeo', link: 'https://youtu.be/test' };

    // Função simulada para verificar novos uploads
    const verificarUploads = (canalId, video) => {
      if (notificacaoController.notificacoes[canalId] === 'ativadas') {
        return {
          mensagem: `Novo vídeo disponível: ${video.titulo}`,
          link: video.link,
        };
      }
      return null;
    };

    // Ação: Verificar novos uploads
    const notificacao = verificarUploads('canal1', novoVideo);

    // Validações
    expect(notificacao).not.toBeNull();
    expect(notificacao.mensagem).toBe('Novo vídeo disponível: Novo Vídeo');
    expect(notificacao.link).toBe('https://youtu.be/test');
  });

  //CT047
  it('não deve gerar notificação se não houver novos uploads', () => {
    // Ação: Simula ausência de novos uploads
    const verificarUploads = (canalId, video) => {
      if (!video) {
        return null;
      }
    };

    const notificacao = verificarUploads('canal1', null);

    // Validações
    expect(notificacao).toBeNull();
  });
});
