import * as supertest from 'supertest';
const request = supertest('https://practice-react.sdetunicorns.com/api/test');

describe('Brands API validation', () => {

    it('GET /brands', async () => {
        let res = await request.get('/brands');
        //console.log(res)
        expect(res.statusCode).toEqual(200);
        expect(res.body).not.toEqual({});
        expect(res.body).not.toHaveLength(0);
    })
});

describe.only('Create Fetch Update and Delete new brands', () => {
    let newBrands;
    it('POST /brands', async () => {
        
        let dataObj = [{
            'name': 'Test Data '+Math.floor(Math.random() * 1000),
            'description': 'Test Description'
        }]
        for(let prop of dataObj){
            let res = await request.post('/brands')
            .send(prop);
            expect(res.statusCode).toEqual(200);
            expect(res.body.name).toEqual(prop.name);
            expect(res.body.description).toEqual(prop.description);
            expect(res.body._id).not.toEqual(null);
            expect(res.body.createdAt).not.toEqual(null);
            return newBrands = res.body;
        }
        
    })
    it('GET /brands', async () => {
        let res = await request.get(`/brands/${newBrands._id}`);
        //console.log(res)
        expect(res.statusCode).toEqual(200);
        expect(res.body).not.toEqual({});
        expect(res.body.name).toEqual(newBrands.name);
    })

    it('PUT /brands', async () => {
        let name = 'Updated Test Data'+Math.floor(Math.random() * 1000);
        let res = await request.put(`/brands/${newBrands._id}`)
        .send({
            'name': name
        })
        console.log(res)
        expect(res.statusCode).toEqual(200);
        expect(res.body).not.toEqual({});
        expect(res.body.name).toEqual(name);
        newBrands.name = name;
    })

    it('GET name of /brands', async () => {
        let res = await request.get(`/brands/${newBrands._id}`);
        //console.log(res)
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual(newBrands.name);
        expect(res.body.name).toContain('Updated');
    })

    it('DELETE /brands', async () => {
        let res = await request.delete(`/brands/${newBrands._id}`);
        //console.log(res)
        expect(res.statusCode).toEqual(200);
    })

    it('GET name of /brands', async () => {
        let res = await request.get(`/brands/${newBrands._id}`);
        //console.log(res)
        expect(res.statusCode).toEqual(404);
    })
})
    
