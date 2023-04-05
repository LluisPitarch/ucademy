import { Button, Form, Input } from 'antd';
import { User } from '../../model/user';
import { ActionButtonsContainer } from './styles';

export interface EditUserValues {
  name: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
}

type Props = {
  user: User;
  onUpdateUser: (user: User) => void;
  onCancel: () => void;
};

const EditUsersForm = ({ user, onUpdateUser, onCancel }: Props) => (
  <Form
    name="editUser"
    initialValues={{ remember: true }}
    onFinish={(values: EditUserValues) => {
      onUpdateUser({ ...user, ...values });
    }}
    autoComplete="off"
  >
    <Form.Item
      label="Nombre"
      name="name"
      rules={[{ required: true, message: 'El nombre es obligatorio' }]}
      initialValue={user.name}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Apellidos"
      name="lastName"
      rules={[{ required: true, message: 'El apellido es obligatorio' }]}
      initialValue={user.lastName}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Nombre de usuario"
      name="username"
      rules={[
        { required: true, message: 'El nombre de usuario es obligatorio' },
      ]}
      initialValue={user.username}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'El email es obligatorio' }]}
      initialValue={user.email}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Móvil"
      name="phone"
      rules={[{ required: true, message: 'El móvil es obligatorio' }]}
      initialValue={user.phone}
    >
      <Input />
    </Form.Item>
    <ActionButtonsContainer>
      <Button type="default" onClick={onCancel}>
        Cancelar Edición
      </Button>
      <Button type="primary" htmlType="submit">
        Guardar
      </Button>
    </ActionButtonsContainer>
  </Form>
);

export default EditUsersForm;
