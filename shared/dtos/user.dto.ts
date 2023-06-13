export type CreateUserDto = {
    email: string;
    username: string;
    password: string
}

export type SignupInputFields = 'username' | 'password' | 'email'

export type LoginDataDto = Omit<CreateUserDto, 'email'>