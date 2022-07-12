import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BoardsService} from "@core/services/boards.service";
import {IBoard} from "@shared/interfaces/board.interface";
import {MDBModalService} from "angular-bootstrap-md";
import {Subject} from "rxjs";

@Component({
  selector: 'app-board-add',
  templateUrl: './board-add.component.html',
  styleUrls: ['./board-add.component.scss']
})
export class BoardAddComponent {

  public boards: IBoard[] = [];
  public addBoardForm: FormGroup;
  public action = new Subject<any>();
  public bgBoard = this.boardsService.bgColorBoard;

  constructor(public fb: FormBuilder,
              private modalService: MDBModalService,
              private boardsService: BoardsService) {
    this._createForm();
  }

  private _createForm() {
    this.addBoardForm = this.fb.group({
      boardBackground: ['#838C91', Validators.required],
      boardName: [null, [Validators.required, Validators.maxLength(15)]],
    });
  }

  get boardNameForm() {
    return this.addBoardForm.get('boardName');
  }

  addBoard(form) {
    if (this.addBoardForm.invalid) {
      this.addBoardForm.markAllAsTouched();
    } else if (this.addBoardForm.valid) {
      this.boards = this.boardsService.getBoards();
      this.action.next(form);
      this.modalService.hide(1);
    }
  }

  closeBoard() {
    this.modalService.hide(1);
  }
}

