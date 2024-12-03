export class ComentarioController {
  constructor() {
    this.comentarios = [];
    this.palavrasProibidas = ['palavrao1', 'palavrao2']; 
  }

  adicionarComentario(userID, videoID, comentarioID, comentario) {
    if (comentario.length < 2) {
      throw new Error('O comentário deve ter no mínimo 2 caracteres.');
    }
    if (comentario.length > 500) {
      throw new Error('O comentário não pode exceder 500 caracteres.');
    }

    const status = this.isComentarioInapropriado(comentario) ? 'para revisão' : 'comentado';

    const novoComentario = {
      id: this.comentarios.length + 1,
      userID,
      videoID,
      comentarioID,
      comentario,
      status,
    };

    this.comentarios.push(novoComentario);
    return novoComentario;
  }

  getComentarios(videoID) {
    return this.comentarios.filter((c) => c.videoID === videoID);
  }

  isComentarioInapropriado(comentario) {
    const contemPalavraProibida = this.palavrasProibidas.some((palavra) =>
      comentario.includes(palavra)
    );

    const contemLinkExterno = /(https?:\/\/[^\s]+)/g.test(comentario);
    return contemPalavraProibida || contemLinkExterno;
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
