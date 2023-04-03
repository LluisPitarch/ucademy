import { User } from './model/user';

export interface UsersRepository {
  getUsers(pageSize: number, page: number): Promise<User[]>;

  getUserFromId(userId: string): Promise<User>;

  createUser(user: User): Promise<User>;

  updateUser(user: User): Promise<User>;
}
