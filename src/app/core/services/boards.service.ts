import {Injectable} from '@angular/core';
import {IBoards} from "@shared/interfaces/boards.interface";
import {v4 as getUniqueID} from 'uuid';
import {IBoard} from "@shared/interfaces/board.interface";
import {ITask} from "@shared/interfaces/task.interface";

@Injectable({
  providedIn: 'root'
})

export class BoardsService {

  private boards: IBoards[] = [
    {
      boardId: "1",
      boardName: "Work",
      boardBackground: "#D29034",
      boardFavorite: false,
      boardColumn: [
        {
          columnId: "101",
          columnName: "To do",
          columnTask: [
            {
              taskId: "1001",
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
          columnId: "102",
          columnName: "Not started",
          columnTask: [],
        },
        {
          columnId: "103",
          columnName: "Finished",
          columnTask: [],
        },
      ]
    },
    {
      boardId: "2",
      boardName: "Home",
      boardBackground: "#519839",
      boardFavorite: true,
      boardColumn: [
        {
          columnId: "104",
          columnName: "Routine",
          columnTask: [],
        },
        {
          columnId: "105",
          columnName: "Planned",
          columnTask: [
            {
              taskId: "1002",
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
          columnId: "106",
          columnName: "Need to buy",
          columnTask: [],
        },
      ],
    },
    {
      boardId: "3",
      boardName: "Family",
      boardBackground: "#4BBF6B",
      boardFavorite: false,
      boardColumn: [
        {
          columnId: "107",
          columnName: "Common",
          columnTask: [],
        },
        {
          columnId: "108",
          columnName: "John",
          columnTask: [
            {
              taskId: "1003",
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
          columnId: "109",
          columnName: "Elizabet",
          columnTask: [
            {
              taskId: "1004",
              taskName: "Buy a new dress",
              taskDesc: "I want to buy a new dress in a new shop what opened nearby our home",
              taskTag: [],
              taskDate: "unknown",
              taskBackground: "purple",
              taskUser: [],
            },
            {
              taskId: " 1005",
              taskName: "Go to hospital",
              taskDesc: "My headache is growing, need to go to hospital",
              taskTag: [],
              taskDate: "unknown",
              taskBackground: "purple",
              taskUser: [],
            },
            {
              taskId: "1004",
              taskName: "Buy a new dress",
              taskDesc: "I want to buy a new dress in a new shop what opened nearby our home",
              taskTag: [],
              taskDate: "unknown",
              taskBackground: "purple",
              taskUser: [],
            },
            {
              taskId: "1005",
              taskName: "Go to hospital",
              taskDesc: "My headache is growing, need to go to hospital",
              taskTag: [],
              taskDate: "unknown",
              taskBackground: "purple",
              taskUser: [],
            },
            {
              taskId: "1004",
              taskName: "Buy a new dress",
              taskDesc: "I want to buy a new dress in a new shop what opened nearby our home",
              taskTag: [],
              taskDate: "unknown",
              taskBackground: "purple",
              taskUser: [],
            },
            {
              taskId: "1005",
              taskName: "Go to hospital",
              taskDesc: "My headache is growing, need to go to hospital",
              taskTag: [],
              taskDate: "unknown",
              taskBackground: "purple",
              taskUser: [],
            },
            {
              taskId: "1004",
              taskName: "Buy a new dress",
              taskDesc: "I want to buy a new dress in a new shop what opened nearby our home",
              taskTag: [],
              taskDate: "unknown",
              taskBackground: "purple",
              taskUser: [],
            },
            {
              taskId: "1005",
              taskName: "Go to hospital",
              taskDesc: "My headache is growing, need to go to hospital",
              taskTag: [],
              taskDate: "unknown",
              taskBackground: "purple",
              taskUser: [],
            },
            {
              taskId: "1005",
              taskName: "Go to hospital",
              taskDesc: "My headache is growing, need to go to hospital",
              taskTag: [],
              taskDate: "unknown",
              taskBackground: "purple",
              taskUser: [],
            },
            {
              taskId: "1004",
              taskName: "Buy a new dress",
              taskDesc: "I want to buy a new dress in a new shop what opened nearby our home",
              taskTag: [],
              taskDate: "unknown",
              taskBackground: "purple",
              taskUser: [],
            },
            {
              taskId: "1005",
              taskName: "Go to hospital",
              taskDesc: "My headache is growing, need to go to hospital",
              taskTag: [],
              taskDate: "unknown",
              taskBackground: "purple",
              taskUser: [],
            },
            {
              taskId: "1005",
              taskName: "Go to hospital",
              taskDesc: "My headache is growing, need to go to hospital",
              taskTag: [],
              taskDate: "unknown",
              taskBackground: "purple",
              taskUser: [],
            },
            {
              taskId: "1004",
              taskName: "Buy a new dress",
              taskDesc: "I want to buy a new dress in a new shop what opened nearby our home",
              taskTag: [],
              taskDate: "unknown",
              taskBackground: "purple",
              taskUser: [],
            },
            {
              taskId: "1005",
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

  public bgColorBoard = [
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
    let randomId = getUniqueID();
    this.boards.push({...board, boardId: randomId, boardBackground: board.boardBackground})
  }

  editBoard(form): void {
    this.boards = this.boards.map(item => {
      if (item.boardId === form.boardId) {
        return {...item, ...form};
      }
      return item;
    });
  }

  public deleteBoard(boardId: string): void {
    this.boards = this.boards.filter(item => item.boardId !== boardId)
  }

  public toggleFavorite(board): void {
    this.boards = this.boards.map((item, index) => {
      if (item.boardId === board.boardId) {
        this.boards[index].boardFavorite = !board.boardFavorite;
      }
      return item;
    });
  }

  public addColumn(board: IBoard, id: string): void {
    let randomId = getUniqueID();
    let filterBoard = this.boards.filter(column => column.boardId == id)
    filterBoard[0].boardColumn.push({...board, columnId: randomId, columnTask: []})
  }

  public addTask(task: ITask, idColumn: string, idBoard: string ): void {
    let randomId = getUniqueID();
    let filterBoard = this.boards.filter(column => column.boardId == idBoard)
    let filterColumn = filterBoard[0].boardColumn.filter(task => task.columnId == idColumn)
    filterColumn[0].columnTask.push({
      ...task,
      taskId: randomId,
      taskName: task.taskName,
      taskDesc: '',
      taskTag: [],
      taskDate: '',
      taskBackground: '',
      taskUser: [],
    })
  }

}
