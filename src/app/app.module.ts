import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindFormComponent } from './find-form/find-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepoComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';
import { DatePipePipe } from './date-pipe.pipe';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    FindFormComponent,
    NavbarComponent,
    RepoComponent,
    UserComponent,
    DatePipePipe,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
