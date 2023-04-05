import {
  Container,
  LabelData,
  TextContainer,
  TextData,
} from './styles/dataElement.styles';
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  CalendarOutlined,
} from '@ant-design/icons';

const ICONS_SIZE = '19px';

export enum IconType {
  user = 'user',
  mail = 'mail',
  phone = 'phone',
  calendar = 'calendar',
}

type Props = {
  label: string;
  value: string;
  icon?: IconType;
  borderText?: boolean;
  border?: boolean;
};

const getIcon = (icon: IconType | undefined) => {
  switch (icon) {
    case IconType.calendar:
      return <CalendarOutlined style={{ fontSize: ICONS_SIZE }} />;
    case IconType.phone:
      return <PhoneOutlined style={{ fontSize: ICONS_SIZE }} />;
    case IconType.mail:
      return <MailOutlined style={{ fontSize: ICONS_SIZE }} />;
    case IconType.user:
      return <UserOutlined style={{ fontSize: ICONS_SIZE }} />;
    default:
      return <div style={{ width: ICONS_SIZE, height: ICONS_SIZE }}></div>;
      break;
  }
};

const DataElement = ({
  label,
  value,
  icon,
  borderText = false,
  border = false,
}: Props) => (
  <Container border={border}>
    {getIcon(icon)}
    <TextContainer border={borderText}>
      <LabelData>{label}</LabelData>
      <TextData>{value}</TextData>
    </TextContainer>
  </Container>
);

export default DataElement;
