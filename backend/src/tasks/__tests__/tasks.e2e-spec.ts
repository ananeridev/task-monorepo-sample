import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from 'backend/src/app.module';

describe('Tasks', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/GET tasks', () => {
    return request(app.getHttpServer())
      .get('/tasks')
      .expect(200);
  });


  afterAll(async () => {
    await app.close();
  });
});