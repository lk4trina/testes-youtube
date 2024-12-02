export class ComentarioController {
    constructor() {
      this.comentarios = []; 
    }
  
    adicionarComentario(userID, videoID, comentario) {
      if (comentario.length < 2) {
        throw new Error('O comentário deve ter no mínimo 2 caracteres.');
      }
      if (comentario.length > 500) {
        throw new Error('O comentário não pode exceder 500 caracteres.');
      }
  
      const novoComentario = {
        userID,
        videoID,
        comentario,
        status: 'comentado',
      };
  
      this.comentarios.push(novoComentario);
      return novoComentario;
    }
  
    getComentarios(videoID) {
      return this.comentarios.filter((c) => c.videoID === videoID);
    }
  }
  