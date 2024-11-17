export default class NotificacaoController {
    constructor() {
      this.notificacoes = {};
    }
  
    ativarNotificacoes(canalId) {

        if (!this.notificacoes.hasOwnProperty(canalId)) {
        throw new Error(`Canal com ID "${canalId}" não encontrado!`);
      }
  
    
      if (this.notificacoes[canalId] === 'ativadas') {
        throw new Error(`Notificações para o canal "${canalId}" já estão ativadas.`);
      }
  
      this.notificacoes[canalId] = 'ativadas';
    }
  
    desativarNotificacoes(canalId) {
      
      if (!this.notificacoes.hasOwnProperty(canalId)) {
        throw new Error(`Canal com ID "${canalId}" não encontrado!`);
      }
  
      
      if (this.notificacoes[canalId] === 'desativadas') {
        throw new Error(`Notificações para o canal "${canalId}" já estão desativadas.`);
      }
  
      this.notificacoes[canalId] = 'desativadas';
    }
  }
  