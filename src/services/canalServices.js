const inscricoes = new Map();

/**
 * Inscreve um usuário em um canal
 * @param {Object} usuario - Objeto representando o usuário { id, autenticado }
 * @param {Object} canal - Objeto representando o canal { id, ativo }
 * @returns {string} - Mensagem de sucesso ou erro
 */
export function inscreverUsuario(usuario, canal) {
  if (!usuario.autenticado) {
    return 'Erro: Usuário precisa estar autenticado para se inscrever';
  }

  if (!canal.ativo) {
    return 'Erro: O canal não permite novas inscrições';
  }

  if (!inscricoes.has(usuario.id)) {
    inscricoes.set(usuario.id, []);
  }

  inscricoes.get(usuario.id).push(canal);
  return 'Inscrição realizada com sucesso';
}

/**
 * Retorna os canais inscritos de um usuário
 * @param {Object} usuario - Objeto representando o usuário { id }
 * @returns {Array} - Lista de canais inscritos
 */
export function obterCanaisInscritos(usuario) {
  return inscricoes.get(usuario.id) || [];
}
