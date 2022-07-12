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
      boardBackground: "#D29034",
    },
    {
      boardId: "1",
      boardName: "Home",
      boardBackground: "#519839",
    },
    {
      boardId: "2",
      boardName: "Family",
      boardBackground: "#4BBF6B",
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

  public addBoard(board: any): void {
    this.boards.push({...board, boardId: this.boards.length + 1, boardBackground: board.boardBackground})
  }

  public deleteBoard(boardId: string): void {
    this.boards = this.boards.filter(function (item) {
      return item.boardId !== boardId
    })
  }
}
