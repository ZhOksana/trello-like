import { Injectable } from '@angular/core';
import {IUser} from "@shared/interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: IUser[] = [
    {
      email: "admin@mail.com",
      password: "1111",
      confirmPassword: "1111",
      userId: "0",
      role: "0"
    },
    {
      email: "user@mail.com",
      password: "2222",
      confirmPassword: "2222",
      userId: "0",
      role: "0"
    },
  ];

  public getUsers(): IUser[] {
    return this.users;
  }

}

