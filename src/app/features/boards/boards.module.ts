import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardListComponent} from "./pages/board-list/board-list.component";
import {BoardsRoutingModule} from "./boards-routing.module";
import { BoardAddComponent } from './pages/board-add/board-add.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BoardListComponent,
    BoardAddComponent,
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class BoardsModule { }
