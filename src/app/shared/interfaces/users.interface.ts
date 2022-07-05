import {IUserSignIn} from "@shared/interfaces/sign-in.interface";

export interface IUsers extends IUserSignIn {
  id: string,
  role: string
}
