import { describe, it, expect, beforeEach } from 'vitest';
import { CanalController } from 'src/controller/CanalController';

describe('CanalController', () => {
  let canalController;

  beforeEach(() => {
    canalController = new CanalController();
  });


//CT007: Verificar se o número de inscritos é atualizado após uma inscrição

  describe('displaySubscriberCount', () => {
    it('deve atualizar o número de inscritos para "2 inscritos" após uma nova inscrição', () => {
      
      canalController.subscriberCount = 1;

      canalController.addSubscriber();


      const output = canalController.displaySubscriberCount(canalController.subscriberCount);
      expect(output).toEqual('2 inscritos');
    });
  });
});
