export class Api{
    // Base Url declaration
    static baseUrl = 'http://localhost:3001/';
    // Auth endpoints
    static login = `${Api.baseUrl}auth/login`
    static register = `${Api.baseUrl}auth/register`
}