import { describe, it, expect, beforeEach } from 'vitest';
import VideoController from 'src/controller/VideoController';

describe('Teste de Integração - Curtir Vídeo (RF020 - RT031)', () => {
  let videoController;

  beforeEach(() => {
    videoController = new VideoController();
  });

  it('deve registrar uma curtida no vídeo "Cidade Dormitório - Semáforo Autônomo Nervoso"', () => {
    const videoID = 'cidade-dormitorio-001';
    const curtidasIniciais = 0;
    const descurtidasIniciais = 0;

    videoController.registrarCurtidasDescurtidas(videoID, curtidasIniciais, descurtidasIniciais);

    const dadosAtuais = videoController.getCurtidasDescurtidas(videoID);
    videoController.registrarCurtidasDescurtidas(videoID, dadosAtuais.curtidas + 1, dadosAtuais.descurtidas);

    const resultado = videoController.getCurtidasDescurtidas(videoID);
    expect(resultado.curtidas).toBe(1);
    expect(resultado.descurtidas).toBe(0);
  });

  it('deve lançar erro ao tentar acessar curtidas de um vídeo não registrado', () => {
    const videoIDInexistente = 'inexistente-001';

    expect(() => {
      videoController.getCurtidasDescurtidas(videoIDInexistente);
    }).toThrowError('Vídeo não encontrado.');
  });

  it('deve registrar curtidas e descurtidas corretamente em um vídeo', () => {
    const videoID = 'cidade-dormitorio-002';
    const curtidasIniciais = 2;
    const descurtidasIniciais = 1;

    videoController.registrarCurtidasDescurtidas(videoID, curtidasIniciais, descurtidasIniciais);

    const resultado = videoController.getCurtidasDescurtidas(videoID);
    expect(resultado.curtidas).toBe(2);
    expect(resultado.descurtidas).toBe(1);
  });

  it('não deve alterar valores ao registrar sem mudanças explícitas', () => {
    const videoID = 'cidade-dormitorio-003';
    const curtidasIniciais = 5;
    const descurtidasIniciais = 3;

    videoController.registrarCurtidasDescurtidas(videoID, curtidasIniciais, descurtidasIniciais);

    videoController.registrarCurtidasDescurtidas(videoID, curtidasIniciais, descurtidasIniciais);

    const resultado = videoController.getCurtidasDescurtidas(videoID);
    expect(resultado.curtidas).toBe(5);
    expect(resultado.descurtidas).toBe(3);
  });
});