import { PipeTransform, Injectable } from '@nestjs/common';

import { UserMapper } from '../../mappers/user.mapper';
import { CreateUserDto } from '../../../domain/dto/user.dto';

@Injectable()
export class CreateUserPipe implements PipeTransform {
  constructor(private userMapper: UserMapper) {}

  transform(userDto: CreateUserDto) {
    return this.userMapper.userCreationToDomain(userDto);
  }
}
