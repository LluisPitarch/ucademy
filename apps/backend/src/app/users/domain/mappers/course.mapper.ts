import { CourseDto } from '../dto/course.dto';
import { Course } from '../model/course';

export interface CourseMapper {
  toDto(course: Course): CourseDto;
}
