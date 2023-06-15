import { Observable } from "rxjs";
import { CreateUserDto, User } from "shared/backend/dtos/user.dto";

const users: User[] = [
  {
    id: '11111',
    email: 'user1@dcodl.net',
    username: 'user1',
    password: 'user1-11111',
  },
  {
    id: '22222',
    email: 'user2@dcodl.net',
    username: 'user2',
    password: 'user2-22222',
  },
  {
    id: '33333',
    email: 'user3@dcodl.net',
    username: 'user3',
    password: 'user3-33333',
  },
];


export async function getUsers(): Promise<Observable<User[]>> {
  return new Observable((sub) => {
    sub.next(users);
  })
}

export function addUser(user: CreateUserDto) {
  const id = Math.floor(Math.random() * 10000).toString();
  const userWithId: User = Object.assign(user, {id});
  users.push(userWithId);
  return userWithId;
}
