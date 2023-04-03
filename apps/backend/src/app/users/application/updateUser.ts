import { Inject } from '@nestjs/common';
import { UsersRepository } from '../domain/users.repository';
import { User } from '../domain/model/user';

export class UpdateUser {
  constructor(
    @Inject('UsersRepository') private usersRepository: UsersRepository
  ) {}

  async run(user: User): Promise<User> {
    return await this.usersRepository.updateUser(user);
  }
}
