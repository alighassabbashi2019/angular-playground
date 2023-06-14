import { Component, OnInit } from '@angular/core';
import { RequsetsService } from './requsets.service';
import { CreateUserDto, SignupInputFields } from '../../../shared/dtos/user.dto';
import { ControlContainer, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  signupForm!: FormGroup;

  emailControl!: FormControl;
  usernameControl!: FormControl;
  passwordControl!: FormControl;

  userData: Partial<CreateUserDto> = {
    email: '',
    username: '',
    password: '',
  };
  createdUser!: CreateUserDto;

  signupButtonClicked = false;

  createdAt: Date = new Date();

  constructor(
    private readonly _requestService: RequsetsService,
    private readonly _formBuilder: FormBuilder
  ) {}

  showClearButton(controlName: SignupInputFields) {
    return this.userData[controlName] === '';
  }

  signupUser() {
    const createdUser = this._requestService.signup(
      this.userData as CreateUserDto
    );
    if (createdUser) {
      this.createdAt = new Date();
      this.signupButtonClicked = true;
      console.log(createdUser);
      this.userData = {email: '', username: '', password: ''};
      this.createdUser = createdUser;
    }
  }



  ngOnInit(): void {
    this.emailControl = new FormControl('');
    this.usernameControl = new FormControl('');
    this.passwordControl = new FormControl('');

    this.signupForm = this._formBuilder.group({
      userProperties: new FormArray([this.emailControl, this.usernameControl, this.passwordControl]),
    });
  }
}
