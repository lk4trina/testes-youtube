class VideoController {
  constructor() {
    this.progresso = null;
    this.curtidasDescurtidas = new Map();
    this.ajusteAutomatico = true;
    this.qualidadeVideo = "720p";
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
      throw new Error("Vídeo não encontrado.");
    }
    return this.curtidasDescurtidas.get(videoID);
  }

  ajustarQualidadeAutomaticamente(velocidadeConexao) {
    if (!this.ajusteAutomatico) {
      return this.qualidadeVideo;
    }

    if (velocidadeConexao === "alta") {
      this.qualidadeVideo = "1080p";
    } else if (velocidadeConexao === "baixa") {
      this.qualidadeVideo = "480p";
    } else {
      this.qualidadeVideo = "720p";
    }

    return this.qualidadeVideo;
  }

  desativarAjusteAutomatico() {
    this.ajusteAutomatico = false;
  }

  definirQualidade(qualidade) {
    if (!["1080p", "720p", "480p"].includes(qualidade)) {
      throw new Error("Qualidade inválida.");
    }
    this.qualidadeVideo = qualidade;
  }
}

export default VideoController;
