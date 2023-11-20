import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('check that stack is empty when deleted', () => {
      appController.deleteAll();
      expect(appController.getAllElements()).toBe('[]');
    });

    it('add element and check', () => {
      appController.deleteAll();
      appController.addNew('2');
      appController.addNew('5');
      expect(appController.getAllElements()).toBe('[2,5]');
    });

    it('check adding and removing elements', () => {
      appController.deleteAll();
      appController.addNew('3');
      appController.addNew('7');
      appController.removeLast();
      expect(appController.getAllElements()).toBe('[3]');
    });
  });
});
