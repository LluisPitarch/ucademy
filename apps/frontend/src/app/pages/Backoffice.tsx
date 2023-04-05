import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

import Layout from '../layout/Layout';
import { PageContainer, TableContainer } from './styles/page';
import UsersTable from '../components/users/UsersTable';
import { useState } from 'react';
import UserModal from '../components/users/UserModal';
import { User } from '../model/user';
import { useUsers } from '../hooks/useUsers';

const Backoffice = () => {
  const { users, error, updateUser } = useUsers({ pageSize: 10 });
  const [user, setUser] = useState<User | undefined>();

  const onUserClick = (user: User) => {
    setUser(user);
  };

  const handleCloseModal = () => {
    setUser(undefined);
  };

  const handleUpdateUser = (updatedUser: User) => {
    updateUser(updatedUser);
    handleCloseModal();
  };

  return (
    <Layout>
      <PageContainer>
        {error ? (
          <span>Algo ha ido mal, refresca la página porfa...</span>
        ) : (
          <>
            <Button icon={<PlusCircleOutlined />} type="primary">
              Nuevo Estudiante
            </Button>
            <TableContainer>
              <UsersTable handleRowClick={onUserClick} users={[...users]} />
              {user && (
                <UserModal
                  user={user}
                  isOpen={!!user}
                  onClose={handleCloseModal}
                  onUpdateUser={handleUpdateUser}
                />
              )}
            </TableContainer>
          </>
        )}
      </PageContainer>
    </Layout>
  );
};

export default Backoffice;
