
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
    private client: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.performLookupWithDate(this.lookupDate?.value)
  }


  lookupDate = new FormControl(formatDate(new Date(), 'yyyy-MM-dd', 'en'))
  totalYards = new FormControl(0)
  setsPerformed = this.formBuilder.array([])
  areasWorked = new FormControl('')

  changeDate(event: any) {
    let newDate = event.target.value
    this.performLookupWithDate(newDate)
  }

  performLookupWithDate(date: string|null|undefined) {
    console.log(date)
    if (date == null) {
      return
    }
    
    let httpParams = new HttpParams().set("dateScheduled", date)
    let yardCounter = 0;
    let labels = new Set<string>()
    this.client.get<ScheduledSet[]>("/setschedule", {params: httpParams}).subscribe((results: ScheduledSet[]) => {
      this.setsPerformed.clear()
      results.forEach(set => {
        console.log(set)
        yardCounter += (set.scheduledSet.repCount * set.scheduledSet.repLength)
        this.setsPerformed.push(new FormControl(set.scheduledSet.name))
        set.scheduledSet.labels.forEach(label => labels.add(label))
      })
      let labelList: string[] = []
      labels.forEach(label => labelList.push(label))
      this.totalYards.setValue(yardCounter)
      this.areasWorked.setValue(labelList.join(", "))
    })
  }
}
