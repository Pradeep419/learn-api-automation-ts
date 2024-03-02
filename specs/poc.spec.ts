import * as supertest from 'supertest';
const request = supertest('https://jsonplaceholder.typicode.com');

describe('POC Tests', () => {
    it('GET /posts', async () => {
        const response = await request.get('/posts');
        expect(response.statusCode).toBe(200);
        // asserting the id in the body
        expect(response.body[0].id).toBe(1);
        // asserting the title in the body
        expect(response.body[0].title).toContain('sunt');
    })

    it('Get /comments with query params', async () => {
        const response = await request.get('/comments')
                            .query({postId: 1});
        console.log(response);
        // const response = await request.get('/comments?postId=1')
    })
})

describe('POC POST Tests', () => {
    it('POST /posts', async () => {

        const data ={
            title: 'Kurchi',
            body: 'Madatha',
            userId: 1
        }
        const response = await request.post('/posts')
                            .send(data);
        expect(response.body.title).toBe(data.title)
        expect(response.body.id).toBeGreaterThan(0)
    })
})

describe('POC PUT Tests', () => {
    it('PUT /posts', async () => {

        const data ={
            title: 'Super Start',
            body: 'Madatha',
            userId: 5
        }
        const response = await request.put('/posts/1')
                            .send(data);
        expect(response.body.title).toBe(data.title)
        
    })
})

describe('POC PATCH Tests', () => {
    it('PATCH /posts', async () => {

        const data ={
            title: 'Super Start PATCH'
        }
        const response = await request.patch('/posts/1')
                            .send(data);
        expect(response.body.title).toBe(data.title)
        
    })
})

describe('POC Tests', () => {
    it.only('DELETE /posts', async () => {
        const response = await request.delete('/posts/1');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({id: 1})
    })
})