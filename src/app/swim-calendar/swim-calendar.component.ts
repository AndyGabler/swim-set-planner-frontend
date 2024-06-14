
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { formatDate } from '@angular/common';

import { SwimSet } from '../swimsets';
import { ScheduledSet } from '../scheduledset';

@Component({
  selector: 'app-swim-calendar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './swim-calendar.component.html',
  styleUrl: './swim-calendar.component.css'
})
export class SwimCalendarComponent {
  constructor(
    private client: HttpClient
  ) {
    this.performLookupWithDate(this.lookupDate.value)
  }

  lookupDate = new FormControl(formatDate(new Date(), 'yyyy-MM-dd', 'en'));
  totalYards = new FormControl(0)

  changeDate(event: any) {
    let newDate = event.target.value
    this.performLookupWithDate(newDate)
  }

  performLookupWithDate(date: string|null) {
    console.log(date)
    if (date == null) {
      return
    }
    
    let httpParams = new HttpParams().set("scheduledDate", date)
    let yardCounter = 0;
    this.client.get<ScheduledSet[]>("/setschedule", {params: httpParams}).subscribe((results: ScheduledSet[]) => {
      results.forEach(set => {
        console.log(set)
        yardCounter += (set.scheduledSet.repCount * set.scheduledSet.repLength)
      })
      this.totalYards.setValue(yardCounter)
    })
  }
}
