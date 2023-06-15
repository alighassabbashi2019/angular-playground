import { Injectable } from '@angular/core';
import { CreateUserDto, LoginDataDto, User } from '../../../shared/backend/dtos/user.dto';  // simiulate libs/shared in nx monorepo
import { addUser } from 'server/client.user';

@Injectable({
  providedIn: 'root'
})
export class RequsetsService {

  constructor() {

  }

  signup(userData: CreateUserDto) {
    // send request to backend for sign a user up
    // return access and refresh tokens
    console.log(userData);
    if(userData.username && userData.email && userData.password) {
      const user = addUser(userData);
      return user;
    }
    return null;
  }

  login(userData: LoginDataDto) {
    // send requset to backend for sign a user in
    // return access and refresh tokens
  }

  logout(id: number) {
    // send request to backend for log a user out
    // return message code
  }
}
