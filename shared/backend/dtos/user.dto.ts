export type User = {
  id: string;
  email: string;
  username: string;
  password: string
}

export type CreateUserDto = Omit<User, 'id'>

export type SignupInputFields = 'username' | 'password' | 'email'

export type LoginDataDto = Omit<CreateUserDto, 'email'>
