import { Table as AntTable, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined } from '@ant-design/icons';

import { User } from '../../model/user';

interface DataType extends User {
  key: string;
  handleRowClick: () => void;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Conexión',
    key: 'connection',
    dataIndex: 'connection',
    render: (_, { isOnline }) => <Tag>{isOnline ? 'Online' : 'Offline'}</Tag>,
  },
  {
    title: 'Nombre y apellidos',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Nombre de usuario',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Móvil',
    key: 'phone',
    render: (_, { phone, handleRowClick }) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>{phone}</span>
        <InfoCircleOutlined
          style={{ fontSize: '24px' }}
          onClick={handleRowClick}
        />
      </div>
    ),
  },
];

type Props = {
  handleRowClick: (user: User) => void;
  users: User[];
};

const UsersTable = ({ handleRowClick, users }: Props) => {
  const adaptUsersToColumns = (users: User[]): DataType[] =>
    users.map((user) => ({
      ...user,
      key: user._id,
      handleRowClick: () => handleRowClick(user),
    }));

  return (
    <AntTable
      columns={columns}
      dataSource={[...adaptUsersToColumns(users)]}
      pagination={false}
    />
  );
};

export default UsersTable;
