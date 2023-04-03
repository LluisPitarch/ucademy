import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

import { Course } from '../../domain/model/course';
import { User } from '../../domain/model/user';
import { UserMapper as UserMapperDomain } from '../../domain/mappers/user.mapper';
import { CreateUserDto, UserDto } from '../../domain/dto/user.dto';
import { CourseMapper } from './course.mapper';

@Injectable()
export class UserMapper implements UserMapperDomain {
  constructor(private readonly courseMapper: CourseMapper) {}

  public toDomain(user: UserDto): User {
    return new User(
      user._id,
      user.isOnline,
      user.name,
      user.avatar,
      user.lastName,
      user.username,
      user.email,
      user.phone,
      user.inscriptionDate,
      user.courses.map(
        (course) =>
          new Course(
            course._id,
            course.title,
            course.description,
            course.percentCompleted,
            course.inscriptionData
          )
      )
    );
  }

  public toDomains(users: UserDto[]): User[] {
    return users.map((user) => this.toDomain(user));
  }

  public userCreationToDomain(user: CreateUserDto): User {
    const newUser: UserDto = {
      ...user,
      _id: v4(),
      courses: [],

      // this is hardcoded because i didn't know exactly the use case.
      isOnline: true,
      avatar: '',
    };

    return this.toDomain(newUser);
  }

  public toDto(user: User): UserDto {
    const userCourses = user.getCourses();
    const courses = [];

    if (userCourses.length) {
      const coursesDto = userCourses.map((course) =>
        this.courseMapper.toDto(course)
      );
      courses.push(...coursesDto);
    }

    return {
      _id: user.getId(),
      avatar: user.getAvatar(),
      courses: courses,
      email: user.getEmail(),
      inscriptionDate: user.getInscriptionDate(),
      isOnline: user.getIsOnline(),
      lastName: user.getLastName(),
      name: user.getName(),
      phone: user.getPhone(),
      username: user.getUsername(),
    };
  }
}
