import { describe, it, expect, beforeEach } from 'vitest';
import SearchController from 'src/controller/SearchController';

describe('Teste Unitário - SearchController (RF003 - RT011)', () => {
    let searchController;
    let mockVideos;
  
    beforeEach(() => {
      searchController = new SearchController();
  
      mockVideos = [
        { id: 1, titulo: 'Cidade Dormitório', dataUpload: new Date(), duracao: 5, tipo: 'Vídeo' },
        { id: 2, titulo: 'Semáforo Inteligente', dataUpload: new Date(Date.now() - 48 * 60 * 60 * 1000), duracao: 15, tipo: 'Vídeo' }, 
        { id: 3, titulo: 'Trânsito Urbano', dataUpload: new Date(), duracao: 25, tipo: 'Vídeo' }, 
        { id: 4, titulo: 'Ponte Suspensa', dataUpload: new Date(), duracao: 10, tipo: 'Áudio' }, 
      ];
    });
  
    it('deve aplicar filtro "Hoje"', () => {
      const filtro = "Hoje";
      const resultados = searchController.aplicarFiltro(filtro, mockVideos);
  
      expect(resultados).toHaveLength(3);
      resultados.forEach(video => {
        expect(new Date(video.dataUpload).getTime()).toBeGreaterThanOrEqual(Date.now() - 24 * 60 * 60 * 1000);
      });
    });
  
    it('deve aplicar filtro "Vídeo"', () => {
      const filtro = "Vídeo";
      const resultados = searchController.aplicarFiltro(filtro, mockVideos);
  
      expect(resultados).toHaveLength(3);
      resultados.forEach(video => {
        expect(video.tipo).toBe('Vídeo');
      });
    });
  });