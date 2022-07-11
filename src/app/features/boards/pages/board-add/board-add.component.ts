import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BoardsService} from "@core/services/boards.service";
import {IBoard} from "@shared/interfaces/board.interface";
import {MDBModalService} from "angular-bootstrap-md";
import {BgColorBoard} from "@shared/enums/bgColor-board";

@Component({
  selector: 'app-board-add',
  templateUrl: './board-add.component.html',
  styleUrls: ['./board-add.component.scss']
})
export class BoardAddComponent {
  private boardsService: BoardsService;
  public boards: IBoard[] = [];
  public addBoardForm: FormGroup;
public bgColorBoard = BgColorBoard;

  constructor(public fb: FormBuilder, private modalService: MDBModalService) {
    this._createForm();
    this.boardsService = new BoardsService();
  }

  private _createForm() {
    this.addBoardForm = this.fb.group({
      boardBackground: [null, Validators.required],
      nameBoard: [null, [Validators.required]],
    });
  }

  get boardBackground() {
    return this.addBoardForm.get('boardBackground');
  }

  get nameBoard() {
    return this.addBoardForm.get('nameBoard');
  }

  addBoard(form) {
    this.boards = this.boardsService.getBoards();
    this.boardsService.addBoard(form);
    this.modalService.hide(1);
    console.log(this.addBoardForm.value);
    console.log(this.addBoardForm);
  }

  closeBoard () {
    this.modalService.hide(1);
  }
}

