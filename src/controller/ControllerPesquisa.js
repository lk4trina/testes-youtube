class ControllerPesquisa {
    constructor() {
      // Banco de dados simulado de vídeos
      this.database = [
        "Como aprender programação de forma rápida e eficaz",
        "Técnicas avançadas para aprender programação e desenvolvimento de software em menos tempo e com mais eficácia",
        "Programação para iniciantes: um guia prático",
        "Como desenvolver software com alta produtividade",
      ];
    }
  
    /**
     * Método pesquisarVideo
     * @param {string} campoBuscar - O termo a ser buscado.
     * @returns {string | string[]} - Retornar uma mensagem indicando que nada foi inserido para ser realizada a pesquisa.
     */
    pesquisarVideo(campoBuscar) {
      if (!campoBuscar.trim()) {
        return "Nada foi inserido para realizar a pesquisa.";
      }
  
      return this.consultarVideo(campoBuscar);
    }
  
    /**
     * Método consultarVideo
     * @param {string} termo - O termo a ser buscado no banco de dados.
     * @returns {string[]} - Lista de vídeos que correspondem ao termo.
     */
    consultarVideo(termo) {
      return this.database.filter((video) =>
        video.toLowerCase().includes(termo.toLowerCase())
      );
    }
  }
  
  export default ControllerPesquisa;
  