class VideoController {
  constructor() {
    this.progresso = null;
    this.curtidasDescurtidas = new Map(); 
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

  registrarCurtidasDescurtidas(videoID, curtidas, descurtidas) {
    this.curtidasDescurtidas.set(videoID, { curtidas, descurtidas });
  }

  getCurtidasDescurtidas(videoID) {
    if (!this.curtidasDescurtidas.has(videoID)) {
      throw new Error('Vídeo não encontrado.');
    }
    return this.curtidasDescurtidas.get(videoID);
  }
}

export default VideoController;
