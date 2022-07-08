import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {AppRoutes} from "@shared/enums/app-routes";
import {MainContainerComponent} from "@core/components/main-container/main-container.component";
import {AuthContainerComponent} from "@core/components/auth-container/auth-container.component";


const routes: Routes = [
  {  path: '',
    component: MainContainerComponent,
    // canActivate: [LoggedInUserGuard], // @todo  look how make guard
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>import('./features/boards/boards.module').then(m => m.BoardsModule)
      },
      {
        path: "board/:boardId",
        loadChildren: () =>import('./features/board/board.module').then(m => m.BoardModule)
      },
 /*     {
        path: AppRoutes.PROFILE,
        loadChildren: () =>import('./features/profile/profile.module').then(m => m.BoardsModule)
      },*/
    ],
  },
  {
    path: AppRoutes.AUTH,
    component: AuthContainerComponent,
    // canActivate: [logOutUserGuard], // @todo  look how make guard
    children: [
      {
        path: '',
        loadChildren: () =>import('./features/auth/auth.module').then(m => m.AuthModule)
      },
    ],
  },

  {path: '**',redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
