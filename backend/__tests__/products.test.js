const request = require('supertest');
const express = require('express');

describe('Product Routes', () => {
  let app;
  
  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use('/api/products', require('../routes/productRoutes'));
  });
  
  test('GET /products sin token debe retornar 401', async () => {
    const response = await request(app)
      .get('/api/products');
    
    expect(response.status).toBe(401);
  });
  
  test('POST /products sin token debe retornar 401', async () => {
    const response = await request(app)
      .post('/api/products')
      .send({
        name: 'Producto Test',
        price: 100
      });
    
    expect(response.status).toBe(401);
  });
});