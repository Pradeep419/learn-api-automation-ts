import * as supertest from 'supertest';
import config from '../configuration/base.configuration'
const request = supertest(config.baseUrl);

class BrandController{

    getBrands(){
        return request.get('/brands');
    }

    getBrandById(id){
        return request.get(`/brands/${id}`);
    }

    postBrand(data){
        return request.post('/brands').send(data);
    }

    putBrand(id, data){
        return request.put(`/brands/${id}`).send(data);
    }

    deleteBrand(id){
        return request.delete(`/brands/${id}`);
    }
}

export default new BrandController();