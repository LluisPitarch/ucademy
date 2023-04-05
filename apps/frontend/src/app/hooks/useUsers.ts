import { useEffect, useState } from 'react';
import { getUsers } from '../services/getUsers';
import { User } from '../model/user';
import { putUser } from '../services/putUser';

type Props = {
  pageSize: number;
};

export const useUsers = ({
  pageSize,
}: Props): {
  users: User[] | [];
  error: boolean;
  updateUser: (user: User) => void;
  page: number;
  setPage: (page: number) => void;
} => {
  const [users, setUsers] = useState([] as User[]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);

  const fetchUsers = async () => {
    try {
      const users = await getUsers(page, pageSize);
      if (users?.length) {
        setUsers(users);
      }
    } catch (error) {
      setError(true);
    }
  };

  const updateUser = async (updatedUser: User) => {
    try {
      const updatedUserResponse = await putUser(updatedUser);
      if (updatedUserResponse) {
        fetchUsers();
      }
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, error, updateUser, page, setPage };
};
