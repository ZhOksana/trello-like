import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BoardsService} from "@core/services/boards.service";
import {IBoard} from "@shared/interfaces/board.interface";
import { MDBModalService} from "angular-bootstrap-md";
import {Subject} from "rxjs";


@Component({
  selector: 'app-board-add',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.scss']
})
export class BoardEditComponent implements OnInit {

  public board: IBoard;
  public editBoardForm: FormGroup;
  public actionEdit = new Subject<any>();
  public bgBoard = this.boardsService.bgColorBoard;
  public boards: IBoard[] = [];

  constructor(public fb: FormBuilder,
              private modalService: MDBModalService,
              private boardsService: BoardsService) {

  }

  ngOnInit() {
    this.getBoards();
    this.editBoardForm = this.fb.group({
      boardId: [],
      boardBackground: ['#838C91', Validators.required],
      boardName: [null, [Validators.required, Validators.maxLength(15)]],
    });
  }

  getBoards(): void {
    this.boards = this.boardsService.getBoards();
  }

  get boardNameForm() {
    return this.editBoardForm.get('boardName');
  }

  getBoardById(id: string): void {

    this.board = this.boardsService.getBoardById(id);
    console.log(this.board);
    this.editBoardForm.patchValue(this.board);

  }

/*  editBoard(form) {
    if (this.editBoardForm.invalid) {
      this.editBoardForm.markAllAsTouched();
    } else if (this.editBoardForm.valid) {
      this.board = this.boardsService.getBoards();
      this.action.next(form);
      this.modalService.hide(1);
    }
  }*/

  closeBoard() {
    this.modalService.hide(1);
  }

}

