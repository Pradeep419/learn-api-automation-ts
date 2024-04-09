import * as supertest from 'supertest';
import config from '../configuration/base.configuration'

const request = supertest(config.baseUrl);

class CategoriesController{

    getCategories(){
        return request.get('/categories');
    }

    getCategoriesById(id) {
        return request.get(`/categories/${id}`);
    }

    postCategories(data){
        return request.post('/categories').send(data)
    }

    putCategory(id, data) {
        return request.put(`/categories/${id}`).send(data);
    }
    
    deleteCategory(id){
        return request.delete(`/categories/${id}`);
    }
}

export default new CategoriesController();