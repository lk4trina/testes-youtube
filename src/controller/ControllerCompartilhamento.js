class ControllerCompartilhamento {
    constructor() {
      this.videos = [
        { id_video: 1, nome: "Introdução à Programação" },
        { id_video: 2, nome: "JavaScript para Iniciantes" },
        { id_video: 3, nome: "Aprendendo React" },
        { id_video: 4, nome: "Desenvolvimento Web" },
        { id_video: 5, nome: "Técnicas Avançadas de Programação" },
      ];
      this.usuariosAutenticados = [1, 2, 3]; // IDs de usuários autenticados

      this.redeSocialDisponivel = ["Facebook", "Twitter", "Instagram"];
    }
  
    /**
     * Método compartilharVideo
     * @param {number} usuario_id - ID do usuário autenticado.
     * @param {number} video_id - ID do vídeo a ser compartilhado.
     * @returns {string} - Link de compartilhamento ou mensagem de erro.
     */
    compartilharVideo(usuario_id, video_id) {
      if (!this.usuariosAutenticados.includes(usuario_id)) {
        return "Usuário não autenticado.";
      }
  
      const video = this.videos.find((v) => v.id_video === video_id);
      if (!video) {
        return "Vídeo não encontrado.";
      }
  
      const opcoes = this.opcoesCompartilhamento();
      const link = this.gerarLinkCompartilhamento(video_id);
      return `Compartilhado com sucesso! Link de compartilhamento: ${link}. Opções: ${opcoes}`;
    }
  
    /**
     * Método opcoesCompartilhamento
     * @returns {string} - Opções de compartilhamento disponíveis.
     */
    opcoesCompartilhamento() {
      return "Compartilhar via Facebook, Twitter, ou Instagram.";
    }
  
    /**
     * Método gerarLinkCompartilhamento
     * @param {number} video_id - ID do vídeo a ser compartilhado.
     * @returns {string} - Link de compartilhamento gerado.
     */
    gerarLinkCompartilhamento(video_id) {
      return `https://meusvideos.com/video/${video_id}/compartilhar`;
    }

    /**
    * Método para enviar vídeo para a rede social.
    * @param {string} rede_social - A rede social escolhida.
    * @param {string} link - O link do vídeo.
    * @returns {boolean} - Retorna true se o vídeo foi enviado com sucesso.
    */
    enviarParaRedeSocial(rede_social, video_id) {
    const link = this.gerarLinkCompartilhamento(video_id);
    console.log(`Enviando vídeo para ${rede_social}: ${link}`);
    return true;
  }  
     
  }
  
  export default ControllerCompartilhamento;
  