import { Injectable } from '@angular/core';
import { CreateUserDto, LoginDataDto } from '../../../shared/dtos/user.dto';  // simiulate libs/shared in nx monorepo

@Injectable({
  providedIn: 'root'
})
export class RequsetsService {

  constructor() {

  }

  signup(userData: CreateUserDto) {
    // send request to backend for sign a user up
    // return access and refresh tokens
    if(userData.username && userData.email && userData.password) {
      console.log('send request to backend for sign a user up');
      return Object.assign(userData, {id: Math.random()})
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
