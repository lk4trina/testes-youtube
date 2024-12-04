export class CommentService {
    constructor(authService, videoService) {
      this.authService = authService;
      this.videoService = videoService;
      this.comments = []; 
    }
  
    addComment(userId, videoId, comment) {
      if (!this.authService.isAuthenticated(userId)) {
        throw new Error('Usuário não autenticado.');
      }
  
      if (!this.videoService.isVideoAvailable(videoId)) {
        throw new Error('Vídeo não disponível.');
      }
  
      if (comment.trim() === '') {
        throw new Error('Comentário não pode ser vazio.');
      }
  
      const newComment = {
        id: this.comments.length + 1,
        userId,
        videoId,
        comment,
        timestamp: new Date(),
      };
  
      this.comments.push(newComment);
      return newComment;
    }
  
    getCommentsByVideo(videoId) {
      return this.comments.filter(c => c.videoId === videoId);
    }
  }
  