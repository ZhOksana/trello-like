import { Injectable } from '@angular/core';
import {IBoard} from "@shared/interfaces/board.interface";

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  private boards: IBoard[] = [
    {
      boardId: 0,
      boardName: "Work",
      boardBackground: "#D29034",
      isFavorite: false,
    },
    {
      boardId: 1,
      boardName: "Home",
      boardBackground: "#519839",
      isFavorite: true,
    },
    {
      boardId: 2,
      boardName: "Family",
      boardBackground: "#4BBF6B",
      isFavorite: false,
    },
  ];

  bgColorBoard = [
    {boardBackground: "#838C91"},
    {boardBackground: "#D29034"},
    {boardBackground: "#519839"},
    {boardBackground: "#B04632"},
    {boardBackground: "#89609E"},
    {boardBackground: "#4BBF6B"},
    {boardBackground: "#00AECC"},
    {boardBackground: "#0067A3"},
  ];

  public getBoards(): IBoard[] {
    return this.boards;
  }

  public getBoardById(id): IBoard {
    return this.boards.filter(item => item.boardId === id)[0];
  }

  public addBoard(board: any): void {
    this.boards.push({...board, boardId: this.boards.length + 1, boardBackground: board.boardBackground})
  }

  public deleteBoard(boardId: number): void {
    this.boards = this.boards.filter(function (item) {
      return item.boardId !== boardId;
    })
  }

  public toggleFavorite(board) {
     this.boards = this.boards.map((item, index) => {
      if (item.boardId === board.boardId) {
        this.boards[index].isFavorite = !board.isFavorite;
      }
      return item;
    });
  }
}
