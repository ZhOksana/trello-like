import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardListComponent} from "./pages/board-list/board-list.component";
import {BoardsRoutingModule} from "./boards-routing.module";
import { BoardAddComponent } from './pages/board-add/board-add.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BoardEditComponent} from "./pages/board-edit/board-edit.component";
import { FavoriteBoardsPipe } from './pipes/favorite-boards.pipe';
import { FavoriteHeaderPipe } from './pipes/favorite-header.pipe';


@NgModule({
  declarations: [
    BoardListComponent,
    BoardAddComponent,
    BoardEditComponent,
    FavoriteBoardsPipe,
    FavoriteHeaderPipe
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
