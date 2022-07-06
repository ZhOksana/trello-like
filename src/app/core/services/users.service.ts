import { Injectable } from '@angular/core';
import {IUsers} from "@shared/interfaces/users.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: IUsers[] = [
    {
      email: "admin@mail.com",
      password: "1111",
      confirmPassword: "1111",
      id: "0",
      role: "0"
    },
    {
      email: "user@mail.com",
      password: "2222",
      confirmPassword: "2222",
      id: "0",
      role: "0"
    },
  ];

  public getUsers(): IUsers[] {
    return this.users;
  }

}

