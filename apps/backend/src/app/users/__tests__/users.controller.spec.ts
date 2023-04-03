import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from '../infrastructure/users.controller';
import { UsersService } from '../infrastructure/users.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [UsersService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to backend!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to backend!',
      });
    });
  });
});
