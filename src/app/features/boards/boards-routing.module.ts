import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BoardsComponent} from "./pages/boards/boards.component";


const routes: Routes = [
      { path: '', component: BoardsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardsRoutingModule { }
