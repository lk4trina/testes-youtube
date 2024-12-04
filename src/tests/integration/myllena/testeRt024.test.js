import { describe, it, expect, beforeEach } from 'vitest';

import { CommentService } from '../../../services/CommentService';
import { AuthServiceMock, VideoServiceMock } from '../../../mocks/mock';


describe('CommentService - Integração', () => {
  let commentService;
  const userId = 123;
  const videoId = 12345;

  beforeEach(() => {
    commentService = new CommentService(AuthServiceMock, VideoServiceMock);
  });

  it('deve adicionar um comentário válido', () => {
    const comentario = 'Muito interessante';
    const comment = commentService.addComment(userId, videoId, comentario);
    expect(comment).toBeDefined();
    expect(comment.comment).toBe(comentario);

    const comments = commentService.getCommentsByVideo(videoId);
    expect(comments).toHaveLength(1);
    expect(comments[0].comment).toBe(comentario);
  });

  it('não deve permitir adicionar um comentário vazio', () => {
    const comentario = '';
    expect(() => {
      commentService.addComment(userId, videoId, comentario);
    }).toThrow('Comentário não pode ser vazio.');

    const comments = commentService.getCommentsByVideo(videoId);
    expect(comments).toHaveLength(0);
  });
});
