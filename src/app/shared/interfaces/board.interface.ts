import {ITask} from "@shared/interfaces/task.interface";

export interface IBoard {
  columnId: string,
  columnName: string,
  columnTask : ITask[],
}
