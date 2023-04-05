import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

import { restoreDB, getDB } from './utils/inMemoryDB';
import { mockCreateUser, MOCK_USER_NAME } from './mocks/user';
import { createTestApp } from './utils/testingApp';

describe('Users', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await createTestApp(app);
    await app.init();
  });

  it(`/GET users`, async () => {
    const page = 0;
    const pageSize = 10;
    const usersDb = await getDB();

    // pagination simulation
    const initSlice = page * pageSize;
    const finalSlice = initSlice + pageSize;
    const paginatedUsers = usersDb.slice(initSlice, finalSlice);

    return request(app.getHttpServer())
      .get('/users?page=0&pageSize=10')
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.toString()).toMatch(paginatedUsers.toString());
      });
  });

  it(`/GET user ID`, async () => {
    const usersDb = await getDB();

    const paginatedUser = usersDb.slice(0, 1);

    return request(app.getHttpServer())
      .get('/users/d9e09e7a-bc8e-426f-a10f-98ce6b7462c7')
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.toString()).toMatch(paginatedUser[0].toString());
      });
  });

  afterAll(async () => {
    await app.close();
  });

  it(`/POST user`, () => {
    return request(app.getHttpServer())
      .post('/users')
      .send(mockCreateUser)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .then(async (response) => {
        expect(response.status).toBe(201);

        const usersDb = await getDB();
        const lastUser = usersDb.slice(0, 1);

        expect(mockCreateUser.name).toBe(lastUser[0].name);
      });
  });

  it(`/PUT user`, async () => {
    const usersDb = await getDB();

    const userToUpdate = usersDb.slice(0, 1);

    return request(app.getHttpServer())
      .put('/users')
      .send({ ...userToUpdate[0], name: MOCK_USER_NAME })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .then(async (response) => {
        expect(response.status).toBe(200);

        const usersDb = await getDB();
        const lastUser = usersDb.slice(0, 1);

        expect(lastUser[0].name).toBe(MOCK_USER_NAME);
      });
  });

  afterAll(async () => {
    await app.close();

    await restoreDB();
  });
});
