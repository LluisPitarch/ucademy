import { Button, Modal, Tabs, TabsProps } from 'antd';
import { User } from '../../model/user';
import { useState } from 'react';

import EditUsersForm from './EditUsersForm';
import UserDataView from './UserDataView';
import UserCourses from './UserCourses';

import { ModalFooter } from './styles';

type Props = {
  user: User;
  isOpen: boolean;
  onClose: () => void;
  onUpdateUser: (user: User) => void;
};

const UserModal = ({ user, isOpen, onClose, onUpdateUser }: Props) => {
  const [isEditingMode, setIsEditingMode] = useState(false);

  const handleEdit = () => setIsEditingMode(true);
  const handleCancelEdit = () => setIsEditingMode(false);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Perfil`,
      children: isEditingMode ? (
        <EditUsersForm
          user={user}
          onUpdateUser={onUpdateUser}
          onCancel={handleCancelEdit}
        />
      ) : (
        <UserDataView user={user} onEdit={handleEdit} />
      ),
    },
    {
      key: '2',
      label: `Cursos`,
      children: <UserCourses user={user} />,
    },
  ];

  return (
    <Modal
      open={isOpen}
      okText={false}
      onCancel={onClose}
      closeIcon={true}
      footer={null}
      closable={false}
    >
      <Tabs
        defaultActiveKey="1"
        items={items}
        tabBarStyle={{ width: 'fit-content', marginBottom: '30px !important' }}
      />
      <ModalFooter>
        <Button type="default" onClick={onClose}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UserModal;
