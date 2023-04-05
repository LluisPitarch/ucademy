import { CreateUserDto } from '../../domain/dto/user.dto';

export const MOCK_USER_NAME = 'test-name';

export const mockCreateUser: CreateUserDto = {
  name: MOCK_USER_NAME,
  lastName: 'test',
  email: 'test@mail.co',
  inscriptionDate: '10/12/12',
  phone: '666 666 666',
  username: 'test',
};
