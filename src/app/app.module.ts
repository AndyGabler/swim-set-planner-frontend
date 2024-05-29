import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SetListComponent } from './set-list/set-list.component';
import { SwimCalendarComponent } from './swim-calendar/swim-calendar.component';

/*export const appRoutes: Routes = [{ 
  path: '', 
  redirectTo: '/sets', 
  pathMatch: 'full',
  children: [ 
      { 
          path: 'sets', 
          component: SetListComponent 
      }, 
      { 
          path: 'schedule',
          component: SwimCalendarComponent 
      }]
}];*/

@NgModule({
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      RouterModule.forRoot([{
        path: '', component: SetListComponent
      }])
      //RouterModule.forRoot(appRoutes),
    ],
    declarations: [
      AppComponent,
      TopBarComponent,
      SetListComponent,
      SwimCalendarComponent
    ],
    bootstrap: [AppComponent],
  })
  export class AppModule {}