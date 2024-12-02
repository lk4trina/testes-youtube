import { describe, it, expect, beforeEach } from 'vitest';
import VideoController from '../../../controller/VideoController';


describe('VideoController - Curtidas e Descurtidas', () => {
  let controller;

  beforeEach(() => {
    controller = new VideoController();
  });

  it('deve retornar a quantidade correta de curtidas e descurtidas para um vídeo', () => {
    const videoID = 123;
    const curtidas = 150;
    const descurtidas = 10;


    controller.registrarCurtidasDescurtidas(videoID, curtidas, descurtidas);
    
    const resultado = controller.getCurtidasDescurtidas(videoID);

    expect(resultado.curtidas).toBe(curtidas);
    expect(resultado.descurtidas).toBe(descurtidas);
  });

  it('deve lançar erro se o vídeo não for encontrado', () => {
    const videoID = 666; 

    expect(() => controller.getCurtidasDescurtidas(videoID)).toThrow(
      'Vídeo não encontrado.'
    );
  });
});
