import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardsComponent} from "./pages/boards/boards.component";
import {BoardsRoutingModule} from "./boards-routing.module";


@NgModule({
  declarations: [
    BoardsComponent,
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule
  ]
})
export class BoardsModule { }
