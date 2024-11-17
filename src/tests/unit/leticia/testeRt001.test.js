import { describe, it, expect } from 'vitest';
import { inscreverUsuario, obterCanaisInscritos } from 'src/services/canalServices';

describe('inscreverUsuario', () => {
  it('deve permitir inscrição em um canal ativo com usuário autenticado', () => {
    const usuario = { id: 1, autenticado: true };
    const canal = { id: '8343', ativo: true };

    const resultado = inscreverUsuario(usuario, canal);
    expect(resultado).toBe('Inscrição realizada com sucesso');
    expect(obterCanaisInscritos(usuario)).toContain(canal);
  });

  it('deve retornar erro ao tentar se inscrever sem autenticação', () => {
    const usuario = { id: 2, autenticado: false };
    const canal = { id: '8345', ativo: true };

    const resultado = inscreverUsuario(usuario, canal);
    expect(resultado).toBe('Erro: Usuário precisa estar autenticado para se inscrever');
    expect(obterCanaisInscritos(usuario)).not.toContain(canal);
  });

  it('deve retornar erro ao tentar se inscrever em canal inativo', () => {
    const usuario = { id: 3, autenticado: true };
    const canal = { id: '6748', ativo: false };

    const resultado = inscreverUsuario(usuario, canal);
    expect(resultado).toBe('Erro: O canal não permite novas inscrições');
    expect(obterCanaisInscritos(usuario)).not.toContain(canal);
  });
});
