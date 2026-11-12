const request = require('supertest');
const app = require('./app');

describe('KT3 App', () => {
  test('GET / returns "KT3 App"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('WRONG');
  });

  test('GET /health returns status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
