import { describe, it, expect } from 'vitest';
import PlaylistController from 'src/controller/PlaylistController';
;

describe('PlaylistController - Compartilhar Playlist', () => {
  it('deve compartilhar a playlist corretamente', () => {
    const controller = new PlaylistController();
    const playlistName = 'Lista de reprodução 01';
    const video = 'Cidade Dormitório - Setas azuis';

    controller.autenticarUsuario(true); 
    controller.salvarPlaylist(playlistName, [video]); 

    expect(controller.acessarPlaylist(playlistName)).toEqual([video]);

    const link = controller.compartilharPlaylist(playlistName);

    expect(link).toBe(`http://localhost/playlist/${encodeURIComponent(playlistName)}`);

    const playlistFromLink = controller.acessarPlaylist(playlistName);

    expect(playlistFromLink).toEqual([video]);
  });

  it('não deve compartilhar uma playlist inexistente', () => {
    const controller = new PlaylistController();
    controller.autenticarUsuario(true);

    const link = controller.compartilharPlaylist('Playlist Inexistente');

    expect(link).toBeNull();
  });

  it('não deve compartilhar playlist se o usuário não estiver autenticado', () => {
    const controller = new PlaylistController();
    const playlistName = 'Lista de reprodução 01';
    const video = 'Cidade Dormitório - Setas azuis';

    controller.salvarPlaylist(playlistName, [video]); 

    const link = controller.compartilharPlaylist(playlistName);

    expect(link).toBeNull();
  });
});
