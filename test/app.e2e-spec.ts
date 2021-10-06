import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e test)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('Get all company in collection', () => {
    it('should get all company', async () => {
      const response = await request(app.getHttpServer()).get('/company');
      expect(response.status).toBe(200);
      expect(response.body.length).toBeGreaterThan(1);
    });
  })

  describe('Get company detail', () => {
    it('should get company detail', async () => {
      const response = await request(app.getHttpServer()).get('/company/615bcc4afeb2dc54d52c00a4');
      expect(response.status).toBe(200);
    });

    it('should thrown bad request exception', async () => {
      const response = await request(app.getHttpServer()).get('/company/FAKE-ID');
      expect(response.status).toBe(400);
    });
  })

  describe('edit company', () => {
    it('should thrown bad request exception if edit with non exist field in schema', async () => {
      const testData =  {
        "non exists": "test",
      }

      const response = await request(app.getHttpServer()).put('/company/615bcc4afeb2dc54d52c00a4').send(testData);
      expect(response.status).toBe(400);
    });

    it('should thrown bad request exception if edit non exist company', async () => {
      const testData =  {
        "non exists": "test",
      }
      const response = await request(app.getHttpServer()).put('/company/615bcc4afeb2dc54d52c00a4').send(testData);
      expect(response.status).toBe(400);
    });

    it('should edit alias_name', async () => {
      const testData =  {
        "alias_name": "test",
      }
      const response = await request(app.getHttpServer()).put('/company/615bcc4afeb2dc54d52c00a4').send(testData);
      expect(response.body.alias_name).toBe('test');
    });

  })

  describe('add company detail', () => {
    it('should thrown bad request exception if ignore requirement field', async () => {
      const testData =  {
        "non exists": "test",
      }

      const response = await request(app.getHttpServer()).post('/company').send(testData);
      expect(response.status).toBe(400);
    });

    it('should add company detail', async () => {
      const testData =  {
        "type": "string",
        "category": 0,
        "legal_name": "E2E TEST",
        "alias_name": "string",
        "address": "string",
        "longitude": "string",
        "latitude": "string",
        "phone": "string",
        "whatsapp": "string",
        "email": "string@gmail.com",
        "website": "string",
        "instagram": "string",
        "facebook": "string",
        "twitter": "string"
      }

      const response = await request(app.getHttpServer()).post('/company').send(testData);
      expect(response.status).toBe(201);
      expect(response.body.legal_name).toBe('E2E TEST');
      expect(response.body.company_code).toContain('EET');
    });

  })

  afterEach(() => {
    app.close();
  });

  afterAll(() => {
    app.close();
  });
});
