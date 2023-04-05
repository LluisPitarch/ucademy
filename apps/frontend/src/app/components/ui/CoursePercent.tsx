import { Progress } from 'antd';

import { Course } from '../../model/course';

const CoursePercent = ({ course }: { course: Course }) => (
  <div>
    <div>{course.title}</div>
    <Progress type="line" percent={course.percentCompleted} />
  </div>
);

export default CoursePercent;
