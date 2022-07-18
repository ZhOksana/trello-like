import {Component, OnInit} from '@angular/core';
import {IBoards} from "@shared/interfaces/boards.interface";
import {MDBModalService} from "angular-bootstrap-md";
import {BoardsService} from "@core/services/boards.service";
import {ActivatedRoute} from "@angular/router";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {
  public board: IBoards;
  public idBoard: string;
  public addColumnItem: FormGroup;
  public addTaskItem: FormGroup;
  public isAddColumn: boolean = false;
  public isAddTask: string = null;

  constructor(private modalService: MDBModalService,
              private boardsService: BoardsService,
              private route: ActivatedRoute,
              public fb: FormBuilder,
  ) {

  }

  ngOnInit() {
    this.addColumnItem = this.fb.group({
      columnId: [''],
      columnName: [null, Validators.required],
      columnTask: [[]],
    });
    this.addTaskItem = this.fb.group({
      taskId: [''],
      taskName: [null, Validators.required],
      taskDesc: [''],
      taskTag: [[]],
      taskDate: [''],
      taskBackground: [''],
      taskUser: [[]]
    });
    this.idBoard = this.route.snapshot.paramMap.get('boardId');
    this.board = this.boardsService.getBoardById(this.idBoard);
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.container === event.previousContainer) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex)
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  addColumn(board) {
    if (this.addColumnItem.valid) {
      this.isAddColumn = !this.isAddColumn;
      this.boardsService.addColumn(board, this.idBoard);
      this.addTaskItem.reset();
    }
  }

  addTask(board, idColumn) {
    this.isAddTask = null;
    this.boardsService.addTask(board, idColumn, this.idBoard);
    this.addTaskItem.reset();
    console.log(this.boardsService.getBoards());
  }
}
