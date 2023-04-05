import { User } from '../model/user';
import { client } from '../utils/HttpClient';

export const getUsers = async (
  page: number,
  pageSize = 10
): Promise<User[]> => {
  const { data } = await client.get('/users', {
    params: { page, pageSize },
  });

  return data;
};
