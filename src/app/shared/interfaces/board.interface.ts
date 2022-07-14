import {ITask} from "@shared/interfaces/task.interface";

export interface IBoard {
  columnId: number,
  columnName: string,
  columnTask : ITask[],
}
