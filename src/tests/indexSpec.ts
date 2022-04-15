import { error } from 'console';
import { editImage } from '../imageprocessing';

import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('testing functions working with files', () => {
  it('expects to throw an error when image file is not found', async () => {
    await editImage('ultimat.jpg', 'output.jpg', 350, 200).catch(error);
  });
});

//endpoint testing

describe('testing endpoint responses', () => {
  it('gets the images endpoint', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=200&height=300'
    );
    expect(response.status).toBe(200);
  });
});
