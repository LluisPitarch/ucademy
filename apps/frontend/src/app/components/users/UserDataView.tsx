import { Avatar, Button } from 'antd';

import { User } from '../../model/user';
import DataElement, { IconType } from '../ui/DataElement';
import { ActionButtonsContainer, UserViewContainer } from './styles';

type Props = {
  user: User;
  onEdit: () => void;
};

const UserDataView = ({ user, onEdit }: Props) => (
  <>
    <ActionButtonsContainer>
      <Button type="primary" onClick={onEdit}>
        Editar Estudiante
      </Button>
    </ActionButtonsContainer>
    <UserViewContainer>
      <Avatar
        src={user.avatar}
        alt={user.name}
        style={{
          width: '138px',
          height: '138px',
          display: 'block',
          margin: '0 auto 24px',
        }}
      />
      <DataElement
        icon={IconType.user}
        label="Nombre y apellidos"
        value={`${user.name} ${user.lastName}`}
        borderText
      />
      <DataElement label="Nombre de usuario" value={user.username} border />
      <DataElement
        icon={IconType.mail}
        label="Email"
        value={user.email}
        border
      />
      <DataElement
        icon={IconType.phone}
        label="Móvil"
        value={user.phone}
        border
      />
      <DataElement
        icon={IconType.calendar}
        label="Fecha de inscripción"
        value={user.inscriptionDate.toString()}
      />
    </UserViewContainer>
  </>
);

export default UserDataView;
