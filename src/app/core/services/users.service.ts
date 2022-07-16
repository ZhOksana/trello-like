import { Injectable } from '@angular/core';
import {IUser} from "@shared/interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: IUser[] = [
    {
      userId: 1,
      userEmail: "admin@mail.com",
      userPassword: "1111",
      userConfPassword: "1111",
      userFirstName: "John",
      userLastName: "Snow",
    },
    {
      userId: 2,
      userEmail: "user@mail.com",
      userPassword: "2222",
      userConfPassword: "2222",
      userFirstName: "Elizabet",
      userLastName: "Lancaster",
    },
  ];

  public getUsers(): IUser[] {
    return this.users;
  }

  public addUser(user: any): void {
    this.users.push({...user, userId: this.users.length + 1})
  }
}

