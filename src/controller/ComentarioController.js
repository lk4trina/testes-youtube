export class ComentarioController {
  constructor() {
    this.comentarios = [];
  }

  adicionarComentario(userID, videoID,comentarioID, comentario) {
    if (comentario.length < 2) {
      throw new Error('O comentário deve ter no mínimo 2 caracteres.');
    }
    if (comentario.length > 500) {
      throw new Error('O comentário não pode exceder 500 caracteres.');
    }

    const novoComentario = {
      id: this.comentarios.length + 1, 
      userID,
      videoID,
      comentarioID,
      comentario,
      status: 'comentado',
    };

    this.comentarios.push(novoComentario);
    return novoComentario;
  }

  getComentarios(videoID) {
    return this.comentarios.filter((c) => c.videoID === videoID);
  }


  isComentarioInapropriado(comentario) {
    const palavrasProibidas = ['palavrao1', 'palavrao2'];
    return palavrasProibidas.some((palavra) =>
      comentario.comentario.includes(palavra)
    );
  }

  removerComentario(comentarioID) {
    const index = this.comentarios.findIndex((c) => c.id === comentarioID);
    if (index !== -1) {
      this.comentarios.splice(index, 1);
      return true;
    }
    return false;
  }

  getComentarioByID(comentarioID) {
    return this.comentarios.find((c) => c.id === comentarioID);
  }
}
