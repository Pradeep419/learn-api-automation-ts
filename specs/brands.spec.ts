import controller from '../controller/brand.controller';

describe('Brands API validation', () => {

    it('GET /brands', async () => {
        let res = await controller.getBrands();
        //console.log(res)
        expect(res.statusCode).toEqual(200);
        expect(res.body).not.toEqual({});
        expect(res.body).not.toHaveLength(0);
    })
});

describe('Create Fetch Update and Delete new brands', () => {
    let newBrands;
    describe('Create new brands', () => {
        it('POST /brands', async () => {
        
            let dataObj = [{
                'name': 'Test Data '+Math.floor(Math.random() * 1000),
                'description': 'Test Description'
            }]
            for(let prop of dataObj){
                let res = await controller.postBrand(prop);
                expect(res.statusCode).toEqual(200);
                expect(res.body.name).toEqual(prop.name);
                expect(res.body.description).toEqual(prop.description);
                expect(res.body._id).not.toEqual(null);
                expect(res.body.createdAt).not.toEqual(null);
                return newBrands = res.body;
            }
            
        })

        it('Verify the required field', async () => {
            let dataObj = [{
                'name': '',
                'description': 'Test Description'
            }]
            for(let prop of dataObj){
                let res = await controller.postBrand(prop);
                expect(res.statusCode).toEqual(422);
                expect(res.body.error).toEqual('Name is required');
                
            }
        })

        it('Error for duplicate entries', async () => {

            let dataObj = [{
                'name': 'Test',
                'description': 'Test Description'
            }]
            for(let prop of dataObj){
                let res1 = await controller.postBrand(prop);
                let res2 = await controller.postBrand(prop);
                expect(res2.statusCode).toEqual(422);
                expect(res2.body.error).toContain('already exist')
            }
        })
    })
    
    it('GET /brands', async () => {
        let res = await controller.getBrandById(newBrands._id);
        //console.log(res)
        expect(res.statusCode).toEqual(200);
        expect(res.body).not.toEqual({});
        expect(res.body.name).toEqual(newBrands.name);
    })

    it('PUT /brands', async () => {
        let name = 'Updated Test Data'+Math.floor(Math.random() * 1000);
        let res = await controller.putBrand(newBrands._id, {'name': name});
        console.log(res)
        expect(res.statusCode).toEqual(200);
        expect(res.body).not.toEqual({});
        expect(res.body.name).toEqual(name);
        newBrands.name = name;
    })

    it('PUT /brands with max character length', async () => {
        let name = 'qwertyuiopasdfghjklzxcvbnmqwerty';
        let res = await controller.putBrand('643af1d0943a82def498012c', {'name': name});
        console.log(res)
        expect(res.statusCode).toEqual(422);
        expect(res.body.error).toContain('Brand name is too long')
    })

    it('PUT /brands with description not a string', async () => {
        let name = 'qwertyuiopasdfghjklzxcvbnmqwerty';
        let data = {
            'name': 'test',
            'description': 12345
        }
        let res = await controller.putBrand('643af1d0943a82def498012c', data);
        console.log(res)
        expect(res.statusCode).toEqual(422);
        expect(res.body.error).toContain('Brand description must be a string')
    })

    it('GET name of /brands', async () => {
        let res = await controller.getBrandById(newBrands._id);
        //console.log(res)
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual(newBrands.name);
        expect(res.body.name).toContain('Updated');
    })

    it('DELETE /brands', async () => {
        let res = await controller.deleteBrand(newBrands._id);
        //console.log(res)
        expect(res.statusCode).toEqual(200);
    })

    it('GET name of /brands', async () => {
        let res = await controller.getBrandById(newBrands._id);
        //console.log(res)
        expect(res.statusCode).toEqual(404);
    })
})
    
