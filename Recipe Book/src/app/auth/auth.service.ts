import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//this interface define how object and off responds data look like
interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  //http request send to backend
  //return this prepared observable
  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCYzTxeOKEIuUu6vjFk59I_aIPCfJujyEU',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
