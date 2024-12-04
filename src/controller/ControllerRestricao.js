class ControllerRestricao {
  constructor() {
    this.idadeUsuario = null;
    this.restricoes = new Map(); // Simulação de banco de dados usando um Map
  }

  // Método para verificar a idade do usuário
  verificarIdade(usuario_id) {
    // Simulação de um banco de dados de usuários
    const usuarios = [
      { id_usuario: 1, idade: 17 }, // Menor de idade
      { id_usuario: 2, idade: 20 }, // Maior de idade
    ];

    const usuario = usuarios.find((u) => u.id_usuario === usuario_id);
    if (usuario) {
      this.idadeUsuario = usuario.idade;
      return usuario.idade;
    }
    return null;
  }

  // Método para verificar se o vídeo pode ser acessado pelo usuário
  verificarRestricaoVideo(classificacaoEtaria) {
    if (classificacaoEtaria === "18+" && this.idadeUsuario < 18) {
      return false; // Não pode assistir
    }
    return true; // Pode assistir
  }

  // Método que integra a verificação de idade e de permissão de acesso ao vídeo
  verificarPermissaoIdade(usuario_id, video_id) {
    // Simula a obtenção do vídeo e da idade do usuário
    const video = { id_video: video_id, classificacaoEtaria: "18+" }; // Exemplo de vídeo restrito
    const idade = this.verificarIdade(usuario_id);

    if (idade === null) {
      return false; // Usuário não encontrado
    }

    return this.verificarRestricaoVideo(video.classificacaoEtaria);
  }

  // Mock para verificar a permissão de idade
verificarPermissaoIdade(usuario) {
  const idade = usuario.calcularIdade();
  if (idade >= 18) {
    return true; // Permite conteúdo
  } else {
    return false; // Não permite conteúdo
  }
}

// Mock para verificar a restrição de conteúdo
verificarRestricaoVideo(usuario) {
  // Simulando a verificação de restrição no banco de dados
  const permissao = this.verificarPermissaoIdade(usuario);
  if (!permissao) {
    this.restricoes.set(usuario.getId(), true); // Usuário tem restrição
    return true;
  }
  return false;
}

// Mock para consultar restrição de idade no banco de dados
consultarRestricaoNoBanco(idUsuario) {
  return this.restricoes.get(idUsuario) || false; // Retorna true se restrição ativa, senão false
}

}
  
export default ControllerRestricao; 


  