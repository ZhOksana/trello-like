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
  public idBoard: number;
  public addColumnItem: FormGroup;

  constructor(private modalService: MDBModalService,
              private boardsService: BoardsService,
              private route: ActivatedRoute,
              public fb: FormBuilder,
  ) {

  }

  ngOnInit() {
      this.addColumnItem = this.fb.group({
        columnId: [''],
        columnName: [null, [Validators.required, Validators.maxLength(15)]],
        columnTask: [[]],
      });
    this.idBoard = +this.route.snapshot.paramMap.get('boardId');
    this.board = this.boardsService.getBoardById(this.idBoard);
  }

  drop(event: CdkDragDrop<any[]>) {
   /* console.log(event)*/
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

  addColumn() {
    console.log(this.boardsService.getBoardById(this.idBoard))

  }
}
