class ControllerGerenciadorMidia {
    constructor() {
      this.videos = [
        { id_video: 1, nome: "Tutorial de JavaScript", status: "disponível" },
        { id_video: 2, nome: "Vídeo de Python", status: "indisponível" },
      ];
    }
  
    // Método para buscar vídeo por ID
    buscarVideo(id_video) {
      return this.videos.find((video) => video.id_video === id_video);
    }
  }

  export default ControllerGerenciadorMidia;
  