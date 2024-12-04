class SearchController {
    constructor() {
      this.resultados = [];
      this.filtrosAplicados = null;
    }
  
    inserirFiltroPesquisa(filtro) {
      this.filtrosAplicados = filtro;
    }
  
    acessarFiltroPesquisa() {
      return this.filtrosAplicados;
    }
  
    aplicarFiltro(filtro, videos) {
      this.inserirFiltroPesquisa(filtro);
  
      if (filtro === "Hoje") {
        const ultima24Horas = new Date().getTime() - 24 * 60 * 60 * 1000;
        return videos.filter(video => new Date(video.dataUpload).getTime() >= ultima24Horas);
      }
  
      if (filtro === "4 a 20 minutos") {
        return videos.filter(video => video.duracao >= 4 && video.duracao <= 20);
      }
  
      if (filtro === "Vídeo") {
        return videos.filter(video => video.tipo === "Vídeo");
      }
  
      return videos; // Sem filtro aplicado
    }
  }
  
  export default SearchController;
  