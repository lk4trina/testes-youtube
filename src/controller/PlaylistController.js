
class PlaylistController {
    constructor() {
      this.authenticated = false;
      this.playlists = {}; 
      this.videos = [];
    }
  
    autenticarUsuario(status) {
      this.authenticated = status;
    }

    adicionarVideo(video) {
      if (!this.authenticated) return false;
      this.videos.push(video); // Adiciona um vídeo à lista geral
      return true;
    }
  
    salvarPlaylist(name, videos) {
      if (!this.authenticated || !name || videos.length === 0) return false;
      this.playlists[name] = videos;
      return true;
    }
  
    acessarPlaylist(name) {
      return this.playlists[name] || null;
    }
  
    adicionarVideoPlaylist(playlistName, video) {
      if (!this.authenticated || !this.playlists[playlistName]) return false;
      this.playlists[playlistName].push(video);
      return true;
    }
  
    removerPlaylist(name) {
      if (!this.authenticated || !this.playlists[name]) return false;
      delete this.playlists[name];
      return true;
    }
  
    editarNomePlaylist(oldName, newName) {
      if (!this.authenticated || !this.playlists[oldName] || !newName) return false;
      this.playlists[newName] = this.playlists[oldName];
      delete this.playlists[oldName];
      return true;
    }
    
    compartilharPlaylist(name) {
      if (!this.authenticated || !this.playlists[name]) return null;
      return `http://localhost/playlist/${encodeURIComponent(name)}`; // Link simulado
    }
  }
 
  export default PlaylistController;
  