import { describe, it, beforeEach, expect } from "vitest";
import ControllerPesquisa from "src/controller/ControllerPesquisa"; 
import ControllerRestricao from "src/controller/ControllerRestricao"; 


describe("RT028: Reprodução de Vídeos - Testes de Integração de Reprodução de Vídeos", () => {
    let controllerPesquisa;
    let controllerRestricao;
  
    beforeEach(() => {
      controllerPesquisa = new ControllerPesquisa();
      controllerRestricao = new ControllerRestricao();
    });
  
    // CT051: Verificação de Idade na Ação de Reprodução
    it("CT051: Não deve permitir a reprodução de conteúdo restrito se a idade for inferior à permitida", () => {
      const usuario_id = 1; // Usuário com idade abaixo de 18
      const video_id = 3; // Vídeo com restrição etária "18+"
  
      const resultado = controllerRestricao.verificarPermissaoIdade(usuario_id, video_id);
  
      expect(resultado).toBe(false); // A reprodução deve ser bloqueada
    });
  
    // Testar quando o usuário tem a idade permitida
    it("CT051: Deve permitir a reprodução de conteúdo restrito se a idade for permitida", () => {
      const usuario_id = 2; // Usuário com idade de 20
      const video_id = 3; // Vídeo com restrição etária "18+"
  
      const resultado = controllerRestricao.verificarPermissaoIdade(usuario_id, video_id);
  
      expect(resultado).toBe(true); // A reprodução deve ser permitida
    });
  
    // Testar a pesquisa do vídeo e a verificação de restrição
    it("CT051: Deve retornar o vídeo correto após a pesquisa e verificar a permissão de reprodução", () => {
      const campoBuscar = "Conteúdo Restrito para Maiores de 18";
      const usuario_id = 2; // Usuário com idade de 20
      const resultadoPesquisa = controllerPesquisa.pesquisarVideo(campoBuscar);
  
      // Verificar se o vídeo foi encontrado
      expect(resultadoPesquisa).toHaveLength(1);
      expect(resultadoPesquisa[0].id_video).toBe(3);
  
      // Verificar permissão de reprodução
      const resultadoPermissao = controllerRestricao.verificarPermissaoIdade(usuario_id, resultadoPesquisa[0].id_video);
  
      expect(resultadoPermissao).toBe(true); // Deve permitir a reprodução
    });
  });
