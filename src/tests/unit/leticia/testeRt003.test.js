import { describe, it, expect, beforeEach } from 'vitest';
import { CanalController } from 'src/controller/CanalController';

describe('CanalController', () => {
  let canalController;

  beforeEach(() => {
    canalController = new CanalController();
  });

  describe('displaySubscriberCount', () => {
    it('deve exibir "0 inscritos" quando o número de inscritos for 0', () => {
      const output = canalController.displaySubscriberCount(0);
      expect(output).toEqual('0 inscritos');
    });

    it('deve exibir "1 inscrito" quando o número de inscritos for 1', () => {
      const output = canalController.displaySubscriberCount(1);
      expect(output).toEqual('1 inscrito');
    });

    it('deve exibir "1.000.000 inscritos" quando o número de inscritos for 1.000.000', () => {
      const output = canalController.displaySubscriberCount(1000000);
      expect(output).toEqual('1.000.000 inscritos');
    });
  });
});
