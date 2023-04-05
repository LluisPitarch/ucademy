import { Course } from './course';

export interface User {
  _id: string;
  avatar: string;
  courses: Course[] | [];
  email: string;
  inscriptionDate: string;
  isOnline: boolean;
  lastName: string;
  name: string;
  phone: string;
  username: string;
}
