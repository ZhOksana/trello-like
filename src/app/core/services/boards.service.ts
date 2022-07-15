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
      boardColumn: [
        {
          columnId: 0,
          columnName: "To do",
          columnTask: [
            {
              taskId: 0,
              taskName: "Contact with Mike",
              taskDesc: "Tell him about my new project",
              taskTag: [],
              taskDate: "unknown",
              taskBackground: "blue",
              taskUser: [],
            },
          ],
        },
        {
          columnId: 1,
          columnName: "Not started",
          columnTask: [],
        },
        {
          columnId: 2,
          columnName: "Finished",
          columnTask: [],
        },
      ]
    },
    {
      boardId: 1,
      boardName: "Home",
      boardBackground: "#519839",
      boardFavorite: true,
      boardColumn: [
        {
          columnId: 0,
          columnName: "Routine",
          columnTask: [],
        },
        {
          columnId: 1,
          columnName: "Planned",
          columnTask: [
            {
              taskId: 0,
              taskName: "Travel in Monaco",
              taskDesc: "Planned travel for me and my wife when I can take a vacation",
              taskTag: [],
              taskDate: "unknown",
              taskBackground: "red",
              taskUser: [],
            },
          ],
        },
        {
          columnId: 2,
          columnName: "Need to buy",
          columnTask: [],
        },
      ],
    },
    {
      boardId: 2,
      boardName: "Family",
      boardBackground: "#4BBF6B",
      boardFavorite: false,
      boardColumn: [
        {
          columnId: 0,
          columnName: "Common",
          columnTask: [],
        },
        {
          columnId: 1,
          columnName: "John",
          columnTask: [
            {
              taskId: 3,
              taskName: "Clean my car",
              taskDesc: "I want to clean my car inside",
              taskTag: [],
              taskDate: "unknown",
              taskBackground: "purple",
              taskUser: [],
            },
          ],
        },
        {
          columnId: 2,
          columnName: "Elizabet",
          columnTask: [
            {
              taskId: 0,
              taskName: "Buy a new dress",
              taskDesc: "I want to buy a new dress in a new shop what opened nearby our home",
              taskTag: [],
              taskDate: "unknown",
              taskBackground: "purple",
              taskUser: [],
            },
            {
              taskId: 1,
              taskName: "Go to hospital",
              taskDesc: "My headache is growing, need to go to hospital",
              taskTag: [],
              taskDate: "unknown",
              taskBackground: "purple",
              taskUser: [],
            },
          ],
        },
      ],
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
