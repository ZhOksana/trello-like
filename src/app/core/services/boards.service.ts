import { Injectable } from '@angular/core';
import {IBoard} from "@shared/interfaces/board.interface";

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  private boards: IBoard[] = [
    {
      boardId: "0",
      name: "Work"
    },
    {
      boardId: "1",
      name: "Home"
    },
    {
      boardId: "2",
      name: "Family"
    },
  ];

  public getBoards(): IBoard[] {
    return this.boards;
  }

}
