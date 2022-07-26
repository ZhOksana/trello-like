import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MDBModalService} from "angular-bootstrap-md";
import {BoardsService} from "@core/services/boards.service";
import {Subject} from "rxjs";
import {ITask} from "@shared/interfaces/task.interface";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TaskComponent implements OnInit {

  public idTask: string;
  public idBoard: string;
  public idColumn: string;
  public editTaskForm: FormGroup;
  public actionEdit = new Subject<any>();
  public bgBoard = this.boardsService.bgColorTask;
  public task: ITask;
  public toggleEditTaskName: string = null;
  public toggleEditTaskDesc: string = null;
  public tempTaskDesc: string = null;
  @ViewChild('textAreaDesc') textAreaDesc: ElementRef;

  constructor(public fb: FormBuilder,
              private modalService: MDBModalService,
              private boardsService: BoardsService,
              ) {
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
    this.task = this.boardsService.getTaskById(this.idBoard, this.idColumn, this.idTask);
    // this.actionEdit.next(id);
    this.editTaskForm.patchValue(this.task);
    console.log(this.task)
  }

  closeBoard() {
    this.modalService.hide(1);
  }

  editTask(form) {
    console.log(this.editTaskForm.value)
    if (this.editTaskForm.invalid) {

    } else if (this.editTaskForm.valid) {
      /* this.boards = this.boardsService.getBoards();*/
      this.actionEdit.next(form);
      this.modalService.hide(1);
    }
  }

  toggleFormView() {
    this.toggleEditTaskName = null;
    this.toggleEditTaskDesc = null;
  }

  toggleBtnTaskName(id: string) {
    this.toggleEditTaskName = id;
    this.toggleEditTaskDesc = null;
  }

  toggleBtnTaskDesc(id: string) {
    this.toggleEditTaskDesc = id;
    this.tempTaskDesc = this.editTaskForm.value.taskDesc;
    this.toggleEditTaskName = null;
  }

  heightTextAreaDescription(textArea) {
    if (textArea.scrollHeight < 250) {
      return textArea.scrollHeight - 14 + 'px';
    } else if (textArea.scrollHeight > 250) {
      return this.textAreaDesc.nativeElement.style.height = 250 + 'px';
    }
  }

  cancelChangeTextArea() {
    this.editTaskForm.patchValue({taskDesc: this.tempTaskDesc})
    this.editTaskForm.updateValueAndValidity();
    this.toggleEditTaskDesc = null;
    console.log(this.editTaskForm)
  }

}
