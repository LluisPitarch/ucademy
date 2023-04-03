import { Inject, Injectable } from '@nestjs/common';
import { User } from '../domain/model/user';
import { UsersRepository } from '../domain/users.repository';

@Injectable()
export class GetUsers {
  constructor(
    @Inject('UsersRepository') private usersRepository: UsersRepository
  ) {}

  async run(pageSize: number, page: number): Promise<User[]> {
    return await this.usersRepository.getUsers(pageSize, page);
  }
}
