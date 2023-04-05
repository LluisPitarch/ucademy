import { Injectable } from '@nestjs/common';

import { Course } from '../../domain/model/course';

import { CourseDto } from '../../domain/dto/course.dto';

@Injectable()
export class CourseMapper implements CourseMapper {
  public toDto(course: Course): CourseDto {
    return {
      _id: course.getId(),
      description: course.getDescription(),
      percentCompleted: course.getPercentCompleted(),
      title: course.getTitle(),
    };
  }
}
