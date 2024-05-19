import request from 'supertest';
import app from '../app';

describe('Comment API', () => {
  it('GET /comments - success', async () => {
    const result = await request(app).get('/comments').expect(200);
    expect(result.body).toBeInstanceOf(Array);
  });

  it('POST /comments - success', async () => {
    const commentData = { text: 'Nice post!', userId: 1, postId: 1 };
    const result = await request(app)
      .post('/comments')
      .send(commentData)
      .expect(201);
    expect(result.body.text).toEqual(commentData.text);
  });
});