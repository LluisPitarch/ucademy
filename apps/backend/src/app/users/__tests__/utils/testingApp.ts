import { Test } from '@nestjs/testing';

import { UsersController } from '../../infrastructure/users.controller';
import { UsersService } from '../../infrastructure/users.service';
import { GetUsers } from '../../application/getUsers';
import { GetUserFromId } from '../../application/getUserFromId';
import { CreateUser } from '../../application/createUser';
import { UpdateUser } from '../../application/updateUser';
import { UserMapper } from '../../infrastructure/mappers/user.mapper';
import { CourseMapper } from '../../infrastructure/mappers/course.mapper';
import {
  PagePipe,
  PageSizePipe,
} from '../../infrastructure/utils/pipes/Pagination.pipe';
import { CreateUserPipe } from '../../infrastructure/utils/pipes/CreateUser.pipe';
import { UpdateUserPipe } from '../../infrastructure/utils/pipes/UpdateUser.pipe';
import { INestApplication } from '@nestjs/common';

export const createTestApp = async (app: INestApplication) => {
  const moduleRef = await Test.createTestingModule({
    imports: [],
    controllers: [UsersController],
    providers: [
      {
        provide: 'UsersRepository',
        useClass: UsersService,
      },
      GetUsers,
      GetUserFromId,
      CreateUser,
      UpdateUser,
      UserMapper,
      CourseMapper,
      PagePipe,
      PageSizePipe,
      CreateUserPipe,
      UpdateUserPipe,
    ],
  }).compile();

  return moduleRef.createNestApplication();
};
