import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalContainerComponent } from './containers/global-container/global-container.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RepositoriesComponent } from './pages/repositories/repositories.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalContainerComponent,
    children: [
      {
        path: '',
        component: HomepageComponent,
      },
      {
        path: 'repositories',
        component: RepositoriesComponent,
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    component: GlobalContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
