export default class VideoService {
    constructor() {
      this.database = []; // Simula um "banco de dados" em memória
    }
  
    salvarVideo(dados) {
      const { titulo, descricao, tags } = dados;
  
      if (!titulo || titulo.trim() === "") {
        throw new Error("Título do vídeo não pode estar em branco");
      }
  
      const novoVideo = {
        id: this.database.length + 1,
        titulo,
        descricao,
        tags,
        criadoEm: new Date().toISOString(),
      };
  
      this.database.push(novoVideo);
  
      return "Vídeo salvo com sucesso";
    }
  
    listarVideos() {
      return this.database;
    }
  }
  