import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, DoCheck, SimpleChanges, OnChanges, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SwimSet } from '../swimsets';

@Component({
  selector: 'app-swim-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './swim-calendar.component.html',
  styleUrl: './swim-calendar.component.css'
})
export class SwimCalendarComponent implements OnInit, OnChanges {
  constructor(
    private router: Router,
    private client: HttpClient,
    private route: ActivatedRoute
  ) {
    this.lookupDate = this.route.snapshot.queryParamMap.get('date');
    if (this.lookupDate == null) {
      this.setDate(new Date())
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes detected")
    console.log(changes)
  }

  @Input() lookupDate: string|null = null;

  ngOnInit() {
    // TODO service call
  }

  dateInput(event: any) {
    this.setDate(event.target.value)
  }

  setDate(aDate: Date) {
    console.log(aDate)
    this.lookupDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  }

  clickSet(swimSet: SwimSet) {
    this.router.navigate(['/setdetail'], { state: { selectedSet: swimSet } });
  }
}
