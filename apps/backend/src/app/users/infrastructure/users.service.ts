import { Injectable } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'fs';

import { UsersRepository } from '../domain/users.repository';
import { User } from '../domain/model/user';
import { UserMapper } from './mappers/user.mapper';
import { UserDto } from '../domain/dto/user.dto';

@Injectable()
export class UsersService implements UsersRepository {
  constructor(private readonly userMapper: UserMapper) {}

  async getUsers(pageSize: number, page: number): Promise<User[]> {
    try {
      const data = readFileSync('DB.json');
      const usersDb = JSON.parse(data.toString());

      // pagination simulation
      const initSlice = page * pageSize;
      const finalSlice = initSlice + pageSize;
      const paginatedUsers = usersDb.slice(initSlice, finalSlice);

      return this.userMapper.toDomains(paginatedUsers);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getUserFromId(userId: string): Promise<User> {
    try {
      const data = readFileSync('DB.json');
      const usersDb = JSON.parse(data.toString());

      const user = usersDb.filter((user) => user._id === userId);
      if (user && user.length) {
        return this.userMapper.toDomain(user[0]);
      }
      throw new Error('User not found');
    } catch (error) {
      throw new Error(error.message || 'Unexpected error');
    }
  }

  async createUser(user: User): Promise<User> {
    try {
      const data = readFileSync('DB.json');
      const usersDb = JSON.parse(data.toString());

      // write in memory
      usersDb.unshift(user);
      await writeFileSync('DB.json', JSON.stringify(usersDb), 'utf8');

      return user;
    } catch (error) {
      throw new Error('Unexpected error creating User');
    }
  }

  async updateUser(user: User): Promise<User> {
    try {
      const data = readFileSync('DB.json');
      const usersDb: UserDto[] = JSON.parse(data.toString());

      // simulate an update
      const userIndex = usersDb.findIndex(
        (dbUser) => dbUser._id === user.getId()
      );

      if (userIndex >= 0) {
        const updatedUser = this.userMapper.toDto(user);
        usersDb[userIndex] = updatedUser;
        await writeFileSync('DB.json', JSON.stringify(usersDb), 'utf8');
        return user;
      }

      throw new Error('User not found');
    } catch (error) {
      throw new Error(error.message || 'Unexpected error');
    }
  }
}
