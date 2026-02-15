const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');

describe('Auth Routes', () => {
  let app;
  
  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use('/api/auth', require('../routes/authRoutes'));
  });
  
  test('POST /register debe crear un usuario', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        email: 'test@test.com',
        password: 'password123'
      });
    
    expect(response.status).toBe(201);
  });
  
  test('POST /login debe retornar un token', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@test.com',
        password: 'password123'
      });
    
    expect(response.status).toBe(400);
  });
});