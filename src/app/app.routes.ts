import { Routes } from '@angular/router';
import { SetListComponent } from './set-list/set-list.component';
import { SwimCalendarComponent } from './swim-calendar/swim-calendar.component';

export const routes: Routes = [
    {path: 'sets', component: SetListComponent},
    {path: 'schedule', component: SwimCalendarComponent},
    {path: '', redirectTo: "sets", pathMatch: 'full'}
]