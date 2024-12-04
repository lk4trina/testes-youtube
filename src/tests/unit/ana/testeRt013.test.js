import { describe, it, beforeEach, expect } from "vitest";
import ControllerPesquisa from "src/controller/ControllerPesquisa"; 

describe("RT013: Buscar vídeo - Testes do método pesquisarVideo()", () => {
  let controllerPesquisa; 

  beforeEach(() => {
    controllerPesquisa = new ControllerPesquisa(); 
  });

  // CT022: Busca com 0 caracteres
  it("CT022: Não deve realizar pesquisa se o campo de busca estiver vazio", () => {
    const campoBuscar = "";
    const resultado = controllerPesquisa.pesquisarVideo(campoBuscar); 
    expect(resultado).toBe("Nada foi inserido para realizar a pesquisa.");
  });

  // CT023: Busca com 50 caracteres
  it("CT023: Deve retornar vídeos correspondentes para uma entrada de 50 caracteres", () => {
    const campoBuscar = "Como aprender programação de forma rápida e eficaz";
    const resultado = controllerPesquisa.pesquisarVideo(campoBuscar); 
    expect(resultado).toEqual([
      "Como aprender programação de forma rápida e eficaz",
    ]);
  });

  // CT024: Busca com 100 caracteres
  it("CT024: Deve retornar vídeos correspondentes para uma entrada de 100 caracteres", () => {
    const campoBuscar =
      "Técnicas avançadas para aprender programação e desenvolvimento de software em menos tempo e com mais eficácia";
    const resultado = controllerPesquisa.pesquisarVideo(campoBuscar); 
    expect(resultado).toEqual([
      "Técnicas avançadas para aprender programação e desenvolvimento de software em menos tempo e com mais eficácia",
    ]);
  });
});
