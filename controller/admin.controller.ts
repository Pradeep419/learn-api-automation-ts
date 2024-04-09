import * as supertest from 'supertest';
import config from '../configuration/base.configuration'

const request = supertest(config.baseUrl);

class AdminController{
    
    loginAsAdmin(data){
        return request.post('/admin/login').send(data)
    }
}

export default new AdminController();