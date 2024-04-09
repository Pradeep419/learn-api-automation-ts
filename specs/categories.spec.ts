import controller from '../controller/categories.controller';
import adminController from '../controller/admin.controller';
import login from '../utils/helper';

describe('Get Categories', () => {
    it('GET Categories', async () => {
        let res = await controller.getCategories();
        expect(res.statusCode).toEqual(200);
        expect(res.body).not.toEqual({});
        expect(res.body).not.toHaveLength(0);
    })
})

describe('Create Categories', () => {
    let token = ''
    it('Verify Login', async () => {
        let data = {
            email: 'mod@mail.com',
            password: 'Modpass123!'
        }
        let res = await login(data.email, data.password);
        token = res.body.token;
    })
    it('POST Categories', async () => {
        let data = {
            name: 'HomeApps4'
        }
        let res = await controller.postCategories(data)
                    .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual(data.name);
    })

    it('POST Categories with invalid token', async () => {
        let data = {
            name: 'HomeApps2'
        }
        let res = await controller.postCategories(data)
                    .set('Authorization', `12345`);
        expect(res.statusCode).toEqual(403);
    })
})
