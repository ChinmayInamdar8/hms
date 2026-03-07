export class Api{
    // Base Url declaration
    static baseUrl = process.env.BASE_URL;
    // Auth endpoints
    static login = `${this.baseUrl}auth/login`
    static register = `${this.baseUrl}auth/login`
}