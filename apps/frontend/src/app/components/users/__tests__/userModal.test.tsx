import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import UserModal from '../UserModal';

import { mockUser } from '../../../utils/tests/mocks';
import { User } from '../../../model/user';

const onClose = jest.fn();
const onUpdateUser = jest.fn();

jest.mock('../UserDataView', () => ({ user }: { user: User }) => (
  <div>{user.name}</div>
));
jest.mock('../EditUsersForm', () => ({ user }: { user: User }) => (
  <div>Edit {user.name}</div>
));
jest.mock('../UserCourses', () => ({ user }: { user: User }) => (
  <div>{user.courses[0].title}</div>
));

it('should render correctly the component', () => {
  render(
    <UserModal
      user={mockUser}
      isOpen
      onClose={onClose}
      onUpdateUser={onUpdateUser}
    />
  );

  const userName = screen.getByText(mockUser.name);

  expect(userName).toBeDefined();
});

it('should render the content of the courses view if the user clicks to the courses tab', () => {
  render(
    <UserModal
      user={mockUser}
      isOpen
      onClose={onClose}
      onUpdateUser={onUpdateUser}
    />
  );

  const editButton = screen.getByText('Cursos');
  fireEvent.click(editButton);

  waitFor(() => {
    const userName = screen.getByText(mockUser.courses[0].title);
    expect(userName).toBeDefined();
  });
});
