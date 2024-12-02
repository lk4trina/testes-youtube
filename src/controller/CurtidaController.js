export class CurtidaController {
    constructor() {
      this.curtidas = new Map(); 
    }
  
    curtirVideo(videoId) {
      if (!this.curtidas.has(videoId)) {
        this.curtidas.set(videoId, true); 
      } else {
        throw new Error('Vídeo já está curtido.');
      }
    }
  
    removerCurtida(videoId) {
      if (this.curtidas.has(videoId) && this.curtidas.get(videoId)) {
        this.curtidas.set(videoId, false); 
      } else {
        throw new Error('Não é possível remover curtida de um vídeo que não foi curtido.');
      }
    }
  
    getStatus(videoId) {
      return this.curtidas.get(videoId) || false;
    }
  }
  