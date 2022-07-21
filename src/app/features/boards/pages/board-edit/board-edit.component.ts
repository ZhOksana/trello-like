import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BoardsService} from "@core/services/boards.service";
import {IBoards} from "@shared/interfaces/boards.interface";
import {MDBModalService} from "angular-bootstrap-md";
import {Subject} from "rxjs";


@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['../../../../styles/boards.scss']
})

export class BoardEditComponent implements OnInit {

  public idBoard: number;
  public editBoardForm: FormGroup;
  public actionEdit = new Subject<any>();
  public bgBoard = this.boardsService.bgColorBoard;
  public board: IBoards;

  constructor(public fb: FormBuilder,
              private modalService: MDBModalService,
              private boardsService: BoardsService) {

  }

  ngOnInit() {
    this.editBoardForm = this.fb.group({
      boardId: [''],
      boardBackground: [Validators.required],
      boardName: ['', [Validators.required, Validators.maxLength(15)]],
      boardFavorite: [],
    });
    this.getBoardById(this.idBoard);
  }

  get boardNameForm() {
    return this.editBoardForm.get('boardName');
  }

  getBoardById(id): void {
    this.board = this.boardsService.getBoardById(id);
    this.actionEdit.next(id);
    this.editBoardForm.patchValue(this.board);
  }

  editBoard(form) {
    if (this.editBoardForm.invalid) {
      this.editBoardForm.markAllAsTouched();
    } else if (this.editBoardForm.valid) {
      this.boardsService.editBoard(form);
      this.actionEdit.next(form.boardId);
      this.modalService.hide(1);
    }
  }

  deleteBoard(id) {
    this.boardsService.deleteBoard(id);
    this.modalService.hide(1);
    this.actionEdit.next(id);
  }

  closeBoard() {
    this.modalService.hide(1);
  }

}

