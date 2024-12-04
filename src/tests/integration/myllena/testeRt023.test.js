import { describe, it, expect, beforeEach, vi } from "vitest";
import RecommendationService from "../../../services/RecommendationService";

describe("RecommendationService - Integração", () => {
  let recommendationService;
  let authServiceMock;
  let historyServiceMock;

  const user = { id: 123, name: "Myllena" };
  const videoBeingWatched =
    "Sticky Fingers cover DMA's 'Delete' for Like A Version";
  const userHistory = [
    "Pierce The Veil cover Radiohead ‘Karma Police' for Like A Version",
    "Childish Gambino covers Tamia 'So Into You' for Like A Version",
  ];

  beforeEach(() => {
    authServiceMock = {
      isAuthenticated: vi.fn().mockReturnValue(true),
      getUser: vi.fn().mockReturnValue(user),
    };

    historyServiceMock = {
      getUserHistory: vi.fn().mockReturnValue(userHistory),
      addToHistory: vi.fn(),
    };

    recommendationService = new RecommendationService(
      authServiceMock,
      historyServiceMock
    );
  });

  it("deve gerar recomendações ao assistir a um vídeo com histórico relevante", () => {
    historyServiceMock.addToHistory(videoBeingWatched);

    const recommendations = recommendationService.getRecommendations();

    expect(recommendations).toContain(
      "Recomendação baseada em 'Pierce The Veil cover Radiohead ‘Karma Police' for Like A Version'"
    );

    expect(recommendations).toContain(
      "Recomendação baseada em 'Childish Gambino covers Tamia 'So Into You' for Like A Version'"
    );
  });

  it("não deve gerar recomendações se o usuário não possui histórico relevante", () => {
    historyServiceMock.getUserHistory.mockReturnValue([]);

    const recommendations = recommendationService.getRecommendations();
    expect(recommendations).toHaveLength(0);
  });
});
