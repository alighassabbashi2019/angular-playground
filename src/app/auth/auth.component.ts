import { Component, OnInit } from '@angular/core';
import { RequsetsService } from './requsets.service';
import { CreateUserDto, SignupInputFields } from '../../../shared/dtos/user.dto';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  userData: Partial<CreateUserDto> = {}
  createdUser!: CreateUserDto;

  signupButtonClicked = false;

  createdAt: Date = new Date()

  constructor(private readonly _requestService: RequsetsService) {}

  addField(fieldName: SignupInputFields, value: string) {
    this.userData[fieldName] = value || ''
  }

  signupUser() {
    const createdUser = this._requestService.signup(this.userData as CreateUserDto)
    if(createdUser) {
      this.createdAt = new Date()
      this.signupButtonClicked = true;
      console.log(createdUser);
      this.userData = {}
      this.createdUser = createdUser
    }
  }

  ngOnInit(): void {}

}
