import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BoardsService} from "@core/services/boards.service";
import {IBoard} from "@shared/interfaces/board.interface";
import {MDBModalService} from "angular-bootstrap-md";
import {Subject} from "rxjs";


@Component({
  selector: 'app-board-add',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.scss']
})
export class BoardEditComponent implements OnInit {

  public id: number;
  public editBoardForm: FormGroup;
  public actionEdit = new Subject<any>();
  public bgBoard = this.boardsService.bgColorBoard;
  public board: IBoard;


  constructor(public fb: FormBuilder,
              private modalService: MDBModalService,
              private boardsService: BoardsService) {

  }

  ngOnInit() {
    console.log(this.id);
    this.editBoardForm = this.fb.group({
      boardId: [],
      boardBackground: [Validators.required],
      boardName: [Validators.required, Validators.maxLength(15)],
      isFavorite:[],
    });
    this.getBoardById(this.id);
  }

  get boardNameForm() {
    return this.editBoardForm.get('boardName');
  }

  getBoardById(id): void {
    console.log(id);
    console.log(this.boardsService.getBoardById(id));
    this.board = this.boardsService.getBoardById(id);
    this.actionEdit.next(id);
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

