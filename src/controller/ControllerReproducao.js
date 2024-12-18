import ControllerGerenciadorMidia from "src/controller/ControllerGerenciadorMidia"; 
class ControllerReproducao {
    constructor() {
      this.videos = [
        { id_video: 1, nome: "Introdução à Programação", duracao: 300, tempoAtual: 0 }, // 5 minutos
        { id_video: 2, nome: "JavaScript para Iniciantes", duracao: 450, tempoAtual: 0 }, // 7,5 minutos
        { id_video: 3, nome: "Aprendendo React", duracao: 600, tempoAtual: 0 }, // 10 minutos
        { id_video: 4, nome: "Desenvolvimento Web", duracao: 720, tempoAtual: 0 }, // 12 minutos
      ];
      this.videoReproduzindo = null;

      this.gerenciadorMidia = new ControllerGerenciadorMidia(); // Instancia GerenciadorMidia dentro do ControllerReproducao
      this.reproduzindo = false;
    }
  
    /**
     * Método reproduzirVideo
     * @param {number} id_video - ID do vídeo a ser reproduzido.
     * @returns {boolean} - Retorna True se a reprodução foi iniciada com sucesso.
     */
    reproduzirVideo(id_video) {
      const video = this.videos.find((v) => v.id_video === id_video);
      if (!video) {
        return false;
      }
      this.videoReproduzindo = video;
      return true;
    }
  
    /**
     * Método adiantarVideo
     * @param {number} tempo - Tempo a ser adiantado, em segundos.
     * @returns {boolean} - Retorna True se o vídeo foi adiantado com sucesso.
     */
    adiantarVideo(tempo) {
      if (!this.videoReproduzindo) {
        return false;
      }
      this.videoReproduzindo.tempoAtual += tempo;
      if (this.videoReproduzindo.tempoAtual > this.videoReproduzindo.duracao) {
        this.videoReproduzindo.tempoAtual = this.videoReproduzindo.duracao;
      }
      return true;
    }
  
    /**
     * Método pausarVideo
     * @returns {boolean} - Retorna True se o vídeo foi pausado com sucesso.
     */
    pausarVideo() {
      if (!this.videoReproduzindo) {
        return false;
      }
      this.videoReproduzindo = null;
      return true;
    }
  
    // Método para iniciar a reprodução de um vídeo
    iniciarReproducao(id_video) {
      const video = this.gerenciadorMidia.buscarVideo(id_video);
  
      if (!video) {
        return "Erro: Vídeo não encontrado."; // Caso o vídeo não exista
      }
  
      if (video.status === "indisponível") {
        return "Erro: Vídeo indisponível."; // Caso o vídeo esteja indisponível
      }
  
      this.reproduzindo = true;
      return "Reprodução iniciada com sucesso.";
    }
  
    // Método para verificar se está reproduzindo
    estaReproduzindo() {
      return this.reproduzindo;
    }
  
  }
  
  export default ControllerReproducao;
  