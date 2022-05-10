import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular Material
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

// components
import { GlobalContainerComponent } from './containers/global-container/global-container.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { LastReposContainerComponent } from './containers/last-repos-container/last-repos-container.component';
import { ReposListComponent } from './components/repos-list/repos-list.component';
import { UsersListContainerComponent } from './containers/users-list-container/users-list-container.component';
import { UserItemContainerComponent } from './containers/user-item-container/user-item-container.component';
import { RepositoriesComponent } from './pages/repositories/repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    // pages
    HomepageComponent,

    // containers
    GlobalContainerComponent,
    LastReposContainerComponent,
    UsersListContainerComponent,
    UserItemContainerComponent,

    // components
    HeaderComponent,
    FooterComponent,
    AvatarComponent,
    ReposListComponent,
    RepositoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
