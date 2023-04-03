import { CreateUserDto } from '../dto/user.dto';
import { User } from '../model/user';

export interface UserMapper {
  toDomains(usersDto): User[];

  toDomain(usersDto): User;

  userCreationToDomain(newUser: CreateUserDto): User;
}
