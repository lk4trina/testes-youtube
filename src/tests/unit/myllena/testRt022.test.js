import { describe, it, expect, beforeEach } from 'vitest';
import { ComentarioController } from '../../../controller/ComentarioController';


describe('ComentarioController - Marcação Automática de Comentários Suspeitos', () => {
  let controller;
  const userID = 'user123';
  const videoID = 'video123';

  beforeEach(() => {
    controller = new ComentarioController();
  });

  it('deve marcar comentário com palavra proibida como "para revisão"', () => {
    const comentario = 'Este é um comentário com palavrao1';
    const resultado = controller.adicionarComentario(userID, videoID,1, comentario);
    expect(resultado.status).toBe('para revisão');
  });

  it('deve marcar comentário com link externo como "para revisão"', () => {
    const comentario = 'Confira este link: http://example.com';
    const resultado = controller.adicionarComentario(userID, videoID,2, comentario);
    expect(resultado.status).toBe('para revisão');
  });

  it('não deve marcar comentário apropriado como "para revisão"', () => {
    const comentario = 'Este é um comentário normal';
    const resultado = controller.adicionarComentario(userID, videoID,3, comentario);
    expect(resultado.status).toBe('comentado');
  });
});
