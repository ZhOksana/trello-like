import { Component } from '@angular/core';
import {BoardsService} from "@core/services/boards.service";
import {IBoard} from "@shared/interfaces/board.interface";

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent {

  private boardsService: BoardsService;
  public boards: IBoard[] = [];

  constructor( ) {
    this.boardsService = new BoardsService();
    this.getBoards();
  }

  getBoards(): void {
    this.boards = this.boardsService.getBoards();
  }

}
