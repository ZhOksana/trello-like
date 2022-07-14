import {IUser} from "@shared/interfaces/user.interface";
import {ITag} from "@shared/interfaces/tag.interface";

export interface ITask {
  taskId: number,
  taskName: string,
  taskDesc: string,
  taskTag: ITag[],
  taskDate: string,
  taskBackground: string,
  taskUser: IUser[],
}
