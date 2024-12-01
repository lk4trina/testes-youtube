import { describe, it, expect } from 'vitest';
import { inscreverUsuario, obterCanaisInscritos } from 'src/services/CanalService';


//CT001: Validar inscrição em Canal com Usuário Autenticado
describe('inscreverUsuario', () => {
  it('deve permitir inscrição em um canal ativo com usuário autenticado', () => {
    const usuario = { id: 1, autenticado: true };
    const canal = { id: '8343', ativo: true };

    const resultado = inscreverUsuario(usuario, canal);
    expect(resultado).toBe('Inscrição realizada com sucesso');
    expect(obterCanaisInscritos(usuario)).toContain(canal);
  });

  //CT002: Validar que o Usuário Não Possa se Inscrever sem Autenticação
  it('deve retornar erro ao tentar se inscrever sem autenticação', () => {
    const usuario = { id: 2, autenticado: false };
    const canal = { id: '8345', ativo: true };

    const resultado = inscreverUsuario(usuario, canal);
    expect(resultado).toBe('Erro: Usuário precisa estar autenticado para se inscrever');
    expect(obterCanaisInscritos(usuario)).not.toContain(canal);
  });

  //CT003: Validar que o Usuário não se Inscreva em Canal Inativo
  it('deve retornar erro ao tentar se inscrever em canal inativo', () => {
    const usuario = { id: 3, autenticado: true };
    const canal = { id: '6748', ativo: false };

    const resultado = inscreverUsuario(usuario, canal);
    expect(resultado).toBe('Erro: O canal não permite novas inscrições');
    expect(obterCanaisInscritos(usuario)).not.toContain(canal);
  });
});
