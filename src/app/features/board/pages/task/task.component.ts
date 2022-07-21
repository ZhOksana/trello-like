import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MDBModalService} from "angular-bootstrap-md";
import {BoardsService} from "@core/services/boards.service";
import {Subject} from "rxjs";
import {ITask} from "@shared/interfaces/task.interface";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit{

  public idTask: string;
  public idBoard: string;
  public idColumn: string;
  public editTaskForm: FormGroup;
  public actionEdit = new Subject<any>();
  public bgBoard = this.boardsService.bgColorBoard;
  public task: ITask;

  constructor(public fb: FormBuilder,
              private modalService: MDBModalService,
              private boardsService: BoardsService) {
  }

  ngOnInit() {
    this.editTaskForm = this.fb.group({
      taskId: [],
      taskName: ["", Validators.required],
      taskDesc: [""],
      taskTag: [],
      taskDate: "",
      taskBackground: "",
      taskUser: [],
    });
    this.getBoardById();
  }
  get taskNameForm() {
    return this.editTaskForm.get('taskName');
  }

  getBoardById(): void {
    this.task = this.boardsService.getTaskById(this.idBoard, this.idColumn , this.idTask);
    // this.actionEdit.next(id);
    this.editTaskForm.patchValue(this.task);
    console.log(this.task)
  }

  closeBoard() {
    this.modalService.hide(1);
  }

  editTask(form) {
    if (this.editTaskForm.invalid) {

    } else if (this.editTaskForm.valid) {

 /*     this.boards = this.boardsService.getBoards();*/
      this.actionEdit.next(form);
      this.modalService.hide(1);
    }
  }

}
