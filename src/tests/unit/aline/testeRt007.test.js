import { describe, it, expect } from 'vitest';
import PlaylistController from 'src/controller/PlaylistController';
;

describe('PlaylistController - Adicionar Vídeo a Playlist', () => {
    it('deve adicionar um vídeo à playlist existente', () => {
      const controller = new PlaylistController();
      const playlistName = 'Lista de reprodução 01';
      const video1 = 'Cidade Dormitório - Setas azuis';
      const video2 = 'Cidade Dormitório - Besa';
  
      controller.autenticarUsuario(true);
      controller.salvarPlaylist(playlistName, [video1]); 
  
      const result = controller.adicionarVideoPlaylist(playlistName, video2);
  
      expect(result).toBe(true);
      expect(controller.acessarPlaylist(playlistName)).toEqual([video1, video2]); 
    });
  });