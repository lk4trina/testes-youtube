class RecommendationService {
    constructor(authService, historyService) {
      this.authService = authService;
      this.historyService = historyService;
    }
  
    getRecommendations() {
      if (!this.authService.isAuthenticated()) {
        return [];
      }
  
      const user = this.authService.getUser();
      const history = this.historyService.getUserHistory(user.id);
  
      return history.map(video => `Recomendação baseada em '${video}'`);
    }
  }
  
  export default RecommendationService;
  