import { Injectable } from '@angular/core';
import {IUsers} from "@shared/interfaces/users.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: IUsers[] = [
    {
      id: "1",
      email: "admin@mail.com",
      password: "1111",
      role: "1"
    },
  ];

  public getUsers(): IUsers[] {
    return this.users;
  }

}

