
export const AuthServiceMock = {
    isAuthenticated: (userId) => {
      return userId === 123; 
    },
  };
  
  export const VideoServiceMock = {
    isVideoAvailable: (videoId) => {
      return videoId === 12345; 
    },
  };
  