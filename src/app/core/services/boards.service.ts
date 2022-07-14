import {Injectable} from '@angular/core';
import {IBoards} from "@shared/interfaces/boards.interface";

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  private boards: IBoards[] = [
    {
      boardId: 0,
      boardName: "Work",
      boardBackground: "#D29034",
      boardFavorite: false,
      boardColumn: [{columnId: 1, columnName: "1", columnTask: []}
      ]
    },
    {
      boardId: 1,
      boardName: "Home",
      boardBackground: "#519839",
      boardFavorite: true,
      boardColumn: [],
    },
    {
      boardId: 2,
      boardName: "Family",
      boardBackground: "#4BBF6B",
      boardFavorite: false,
      boardColumn: [],
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

  public getBoards(): IBoards[] {
    return this.boards;
  }

  public getBoardById(id): IBoards {
    return this.boards.filter(item => item.boardId === id)[0];
  }

  public addBoard(board: any): void {
    this.boards.push({...board, boardId: this.boards.length, boardBackground: board.boardBackground})
  }

  editBoard(form): void {
    this.boards = this.boards.map(item => {
      if (item.boardId === form.boardId) {
        return {...item, ...form};
      }
      return item;
    });
  }

  public deleteBoard(boardId: number): void {
    this.boards = this.boards.filter(item => item.boardId !== boardId)
  }

  public toggleFavorite(board) {
    this.boards = this.boards.map((item, index) => {
      if (item.boardId === board.boardId) {
        this.boards[index].boardFavorite = !board.boardFavorite;
      }
      return item;
    });
  }
}
