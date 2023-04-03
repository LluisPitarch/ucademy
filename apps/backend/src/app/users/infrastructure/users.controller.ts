import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
  UsePipes,
} from '@nestjs/common';

import { PagePipe, PageSizePipe } from './utils/pipes/Pagination.pipe';
import { JoiValidationPipe } from './utils/pipes/JoiValidation.pipe';

import { GetUsers } from '../application/getUsers';
import { GetUserFromId } from '../application/getUserFromId';
import { CreateUser } from '../application/createUser';

import { createUserSchema, updateUserSchema } from '../domain/dto/user.dto';
import { CreateUserPipe } from './utils/pipes/CreateUser.pipe';
import { User } from '../domain/model/user';
import { UpdateUserPipe } from './utils/pipes/UpdateUser.pipe';
import { UpdateUser } from '../application/updateUser';

@Controller('/users')
export class UsersController {
  constructor(
    private readonly GetUsers: GetUsers,
    private readonly GetUserFromId: GetUserFromId,
    private readonly CreateUser: CreateUser,
    private readonly UpdateUser: UpdateUser
  ) {}

  @Get('/')
  async getUsers(
    @Query('pageSize', PageSizePipe) pageSize: number,
    @Query('page', PagePipe) page: number,
    @Res() request
  ) {
    const users = await this.GetUsers.run(pageSize, page);
    return request.status(HttpStatus.OK).json(users);
  }

  @Get('/:id')
  async getUser(@Param('id') id: string, @Res() request) {
    const user = await this.GetUserFromId.run(id);
    return request.status(HttpStatus.OK).json(user);
  }

  @Post('/')
  @UsePipes(new JoiValidationPipe(createUserSchema))
  async createUser(@Body(CreateUserPipe) newUser: User, @Res() request) {
    const user = await this.CreateUser.run(newUser);
    return request.status(HttpStatus.CREATED).json(user);
  }

  @Put('/')
  @UsePipes(new JoiValidationPipe(updateUserSchema))
  async updateUser(@Body(UpdateUserPipe) newUser: User, @Res() request) {
    const user = await this.UpdateUser.run(newUser);
    return request.status(HttpStatus.OK).json(user);
  }
}
