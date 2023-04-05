import { renderHook, waitFor } from '@testing-library/react';

import { User } from '../../model/user';
import { useUsers } from '../useUsers';

import { mockUsers, mockUser } from '../../utils/tests/mocks';
import { getUsers } from '../../services/getUsers';
import { putUser } from '../../services/putUser';
import { act } from 'react-dom/test-utils';

jest.mock('../../services/getUsers', () => ({
  getUsers: jest.fn(() => mockUsers),
}));
jest.mock('../../services/putUser', () => ({
  putUser: jest.fn((user: User) => mockUser),
}));

test('should call fetchMethod when is mounted and return the mocked value', async () => {
  const { result } = await renderHook(() => useUsers({ pageSize: 10 }));

  await waitFor(() => {
    expect(result.current.page).toBe(0);
    expect(result.current.users.toString()).toMatch(mockUsers.toString());
    expect(getUsers).toHaveBeenCalledTimes(1);
  });
});

test('should call putUser service when the updateUserMethod is executed and getUsers should be called to update the data', async () => {
  const { result } = renderHook(() => useUsers({ pageSize: 10 }));

  act(() => {
    result.current.updateUser(mockUser);
  });

  await waitFor(() => {
    expect(result.current.page).toBe(0);
    expect(putUser).toHaveBeenCalledTimes(1);
    expect(getUsers).toHaveBeenCalledTimes(2);
  });
});
