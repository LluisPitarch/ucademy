import { User } from '../../model/user';
import CoursePercent from '../ui/CoursePercent';

type Props = {
  user: User;
};

const UserCourses = ({ user }: Props) => {
  return (
    <div>
      {user.courses?.map((course) => (
        <CoursePercent course={course} key={course._id} />
      ))}
    </div>
  );
};

export default UserCourses;
