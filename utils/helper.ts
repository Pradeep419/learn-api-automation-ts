import adminController from "../controller/admin.controller";

const login = async (email: string, password: string) => {
    const data = {
        'email': email,
        'password': password
    }
    let res = await adminController.loginAsAdmin(data);
    return res;
}

export default login;