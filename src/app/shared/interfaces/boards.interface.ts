import {IBoard} from "@shared/interfaces/board.interface";

export interface IBoards {
  boardId: number,
  boardName: string,
  boardBackground: string,
  boardFavorite: boolean,
  boardColumn: IBoard[],
}
