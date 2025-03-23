import api from "./api.service";

class AuthService {
  httpClient: any;
  config: { headers: { 'Content-Type': string; }; };

  constructor() {
    this.httpClient = api
    this.config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  }

  async authenticate(email:string, password: string) {
    return await this.httpClient.post(
      'auth/token',
      { email, password },
      this.config,
    )
  }
}

export default new AuthService()
