import {IBoard} from "@shared/interfaces/board.interface";

export interface IBoards {
  boardId: string,
  boardName: string,
  boardBackground: string,
  boardFavorite: boolean,
  boardColumn: IBoard[],
}
