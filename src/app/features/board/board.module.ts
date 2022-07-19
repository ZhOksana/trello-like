import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardComponent} from "./pages/board/board.component";
import {BoardRoutingModule} from "./board-routing.module";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {ReactiveFormsModule} from "@angular/forms";
import { AutoFocusDirective } from './directive/auto-focus.directive';


@NgModule({
  declarations: [
    BoardComponent,
    AutoFocusDirective,
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    DragDropModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
  ]
})
export class BoardModule { }
