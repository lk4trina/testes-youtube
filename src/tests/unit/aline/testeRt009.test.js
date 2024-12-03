import { describe, it, expect } from 'vitest';
import PlaylistController from 'src/controller/PlaylistController';
;

describe('PlaylistController - Editar Nome da Playlist', () => {
    it('deve editar o nome da playlist corretamente', () => {
      const controller = new PlaylistController();
      const oldPlaylistName = 'Lista de reprodução 01';
      const newPlaylistName = 'Lista de reprodução 02';
      const video = 'Cidade Dormitório - Setas azuis';
  
      controller.autenticarUsuario(true); 
      controller.salvarPlaylist(oldPlaylistName, [video]); 
      expect(controller.acessarPlaylist(oldPlaylistName)).toEqual([video]);
      const result = controller.editarNomePlaylist(oldPlaylistName, newPlaylistName);
      expect(result).toBe(true);
      expect(controller.acessarPlaylist(oldPlaylistName)).toBe(null);
      expect(controller.acessarPlaylist(newPlaylistName)).toEqual([video]);
    });
  });