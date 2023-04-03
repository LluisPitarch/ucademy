import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { PagePipe, PageSizePipe } from './utils/pipes/Pagination.pipe';
import { CreateUserPipe } from './utils/pipes/CreateUser.pipe';
import { UpdateUserPipe } from './utils/pipes/UpdateUser.pipe';
import { UserMapper } from './mappers/user.mapper';
import { UsersService } from './users.service';

import { GetUsers } from '../application/getUsers';
import { GetUserFromId } from '../application/getUserFromId';
import { CreateUser } from '../application/createUser';
import { UpdateUser } from '../application/updateUser';
import { CourseMapper } from './mappers/course.mapper';

@Module({
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
})
export class AppModule {}
