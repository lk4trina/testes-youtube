export class CanalController {
    constructor() {
      this.subscriberCount = 0; 
    }
  
    displaySubscriberCount(subscriberCount) {
      if (subscriberCount === 1) {
        return '1 inscrito';
      }
      return `${subscriberCount.toLocaleString('pt-BR')} inscritos`;
    }
  
    addSubscriber() {
      this.subscriberCount += 1;
    }
  }
  