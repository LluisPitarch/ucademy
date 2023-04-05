import { User } from '../model/user';
import { client } from '../utils/HttpClient';

export const putUser = async (user: User): Promise<User> => {
  const { data } = await client.put('/users', user);

  return data;
};
