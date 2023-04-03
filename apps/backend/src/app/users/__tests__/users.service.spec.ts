import { Test } from '@nestjs/testing';

import { UsersService } from '../infrastructure/users.service';

describe('AppService', () => {
  let service: UsersService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = app.get<UsersService>(UsersService);
  });

  describe('getData', () => {
    // it('should return "Welcome to backend!"', () => {
    //   expect(service.getData()).toEqual({ message: 'Welcome to backend!' });
    // });
  });
});
