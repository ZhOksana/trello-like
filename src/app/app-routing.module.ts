import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutes} from "@shared/enums/app-routes";
import {MainContainerComponent} from "@core/components/main-container/main-container.component";


const routes: Routes = [
  {
    path: AppRoutes.AUTH,
    loadChildren: () =>
      import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: MainContainerComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/board/board.module').then(m => m.BoardModule)
      },
      /* fix
       {
             path: 'user',
             loadChildren: () =>
               import('./features/home/home.module').then(m => m.HomeModule)
           },
           {
             path: 'role',
             loadChildren: () =>
               import('./features/home/home.module').then(m => m.HomeModule)
           },*/
    ],
  },
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
