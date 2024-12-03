
import { describe, it, expect } from 'vitest';
import PlaylistController from 'src/controller/PlaylistController';
;

describe('PlaylistController - Criar Playlist', () => {
  it('deve criar uma playlist corretamente', () => {
    const controller = new PlaylistController();
    const playlistName = 'Lista de reprodução 01';
    const video = 'Cidade Dormitório - Setas azuis';

    controller.autenticarUsuario(true); 
    controller.adicionarVideo(video); 

    const result = controller.salvarPlaylist(playlistName, [video]);

    expect(result).toBe(true); 
    expect(controller.acessarPlaylist(playlistName)).toEqual([video]); 
  });
});

