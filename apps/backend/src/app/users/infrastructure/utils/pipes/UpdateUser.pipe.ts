import { PipeTransform, Injectable } from '@nestjs/common';

import { UserMapper } from '../../mappers/user.mapper';
import { UserDto } from '../../../domain/dto/user.dto';

@Injectable()
export class UpdateUserPipe implements PipeTransform {
  constructor(private userMapper: UserMapper) {}

  transform(userDto: UserDto) {
    return this.userMapper.toDomain(userDto);
  }
}
