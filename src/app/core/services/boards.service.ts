import { Injectable } from '@angular/core';
import {IBoard} from "@shared/interfaces/board.interface";

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  private boards: IBoard[] = [
    {
      boardId: "0",
      boardName: "Work",
      boardBackground: "green",
    },
    {
      boardId: "1",
      boardName: "Home",
      boardBackground: "violet",
    },
    {
      boardId: "2",
      boardName: "Family",
      boardBackground: "orange",
    },
  ];

  public getBoards(): IBoard[] {
    return this.boards;
  }

  public addBoard(board: any): void {
    this.boards.push({...board, boardId: this.boards.length + 1})
  }

  public deleteBoard(boardId: string): void {
    this.boards = this.boards.filter(function (item) {
      return item.boardId !== boardId
    })
  }
}
