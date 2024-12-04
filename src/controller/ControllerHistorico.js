class ControllerHistorico {
    constructor() {
      // Banco de dados simulado de histórico de vídeos
      this.historico = {
        1: [ // id_usuario = 1
          { id_video: 1, nome: "Introdução à Programação" },
          { id_video: 2, nome: "JavaScript para Iniciantes" },
          { id_video: 3, nome: "Aprendendo React" },
          { id_video: 4, nome: "Desenvolvimento Web" },
          { id_video: 5, nome: "Técnicas Avançadas de Programação" },
        ],
      };
    }
  
    /**
     * Método consultarHistorico
     * @param {number} id_usuario - ID do usuário para consultar o histórico.
     * @returns {Array} - Lista de vídeos assistidos pelo usuário.
     */
    consultarHistorico(id_usuario) {
      return this.historico[id_usuario] || [];
    }
  
    /**
     * Método removerVideo
     * @param {number} id_usuario - ID do usuário.
     * @param {number} id_video - ID do vídeo a ser removido.
     * @returns {string} - Mensagem de confirmação ou erro.
     */
    removerVideo(id_usuario, id_video) {
      if (!this.historico[id_usuario]) return "Usuário não encontrado.";
  
      const videoIndex = this.historico[id_usuario].findIndex(
        (video) => video.id_video === id_video
      );
  
      if (videoIndex === -1) {
        return "Vídeo não encontrado no histórico.";
      }
  
      this.historico[id_usuario].splice(videoIndex, 1);
      return "Vídeo removido com sucesso.";
    }
  
    /**
     * Método limparVideosHistorico
     * @param {number} id_usuario - ID do usuário.
     * @returns {string} - Mensagem de confirmação de limpeza.
     */
    limparVideosHistorico(id_usuario) {
      if (!this.historico[id_usuario]) return "Usuário não encontrado.";
       
      this.historico[id_usuario] = [];
      return "Histórico de vídeos limpo com sucesso.";
    }
  }
  
  export default ControllerHistorico;
  