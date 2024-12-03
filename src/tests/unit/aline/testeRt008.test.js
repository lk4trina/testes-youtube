import { describe, it, expect } from 'vitest';
import PlaylistController from 'src/controller/PlaylistController';
;


describe('PlaylistController - Excluir Playlist', () => {
    it('deve excluir a playlist corretamente', () => {
      const controller = new PlaylistController();
      const playlistName = 'Lista de reprodução 01';
      const video = 'Cidade Dormitório - Setas azuis';
  
      controller.autenticarUsuario(true);
      controller.salvarPlaylist(playlistName, [video]);
  
      expect(controller.acessarPlaylist(playlistName)).toEqual([video]);
  
      const result = controller.removerPlaylist(playlistName);
  
      expect(result).toBe(true);
      expect(controller.acessarPlaylist(playlistName)).toBe(null);
    });
  });