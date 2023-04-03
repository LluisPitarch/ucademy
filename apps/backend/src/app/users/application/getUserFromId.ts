import { Inject } from '@nestjs/common';
import { UsersRepository } from '../domain/users.repository';
import { User } from '../domain/model/user';

export class GetUserFromId {
  constructor(
    @Inject('UsersRepository') private usersRepository: UsersRepository
  ) {}

  async run(userId: string): Promise<User> {
    return await this.usersRepository.getUserFromId(userId);
  }
}
