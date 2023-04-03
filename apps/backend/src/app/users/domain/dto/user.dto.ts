import Joi = require('joi');
import { CourseDto } from './course.dto';

export const createUserSchema = Joi.object({
  email: Joi.string().required(),
  inscriptionDate: Joi.date().required(),
  lastName: Joi.string().required(),
  name: Joi.string().required(),
  phone: Joi.string().required(),
  username: Joi.string().required(),
});

export const updateUserSchema = Joi.object({
  _id: Joi.string().required(),
  avatar: Joi.string().required(),
  courses: Joi.array().required(),
  email: Joi.string().required(),
  inscriptionDate: Joi.date().required(),
  isOnline: Joi.boolean().required(),
  lastName: Joi.string().required(),
  name: Joi.string().required(),
  phone: Joi.string().required(),
  username: Joi.string().required(),
});

export interface CreateUserDto {
  email: string;
  inscriptionDate: Date;
  lastName: string;
  name: string;
  phone: string;
  username: string;
}

export interface UserDto {
  _id: string;
  avatar: string;
  courses: CourseDto[] | [];
  email: string;
  inscriptionDate: Date;
  isOnline: boolean;
  lastName: string;
  name: string;
  phone: string;
  username: string;
}
