class VideoController {
    constructor() {
      this.progresso = null;
    }
  
    salvarProgresso(tempoAtual) {
      const [minutos, segundos] = tempoAtual.split(":").map(Number);
      const tempoTotalEmSegundos = minutos * 60 + segundos;
  
      if (tempoTotalEmSegundos < 10) {
        return false;
      }
  
      this.progresso = tempoAtual;
      return true;
    }
  
    retomarProgresso() {
      return this.progresso;
    }
  }
  
  export default VideoController;
  