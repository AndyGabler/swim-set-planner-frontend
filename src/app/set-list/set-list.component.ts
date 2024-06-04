import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { SwimSet, swimSets } from '../swimsets';

@Component({
  selector: 'app-set-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './set-list.component.html',
  styleUrl: './set-list.component.css'
})
export class SetListComponent {
  constructor(
    private router: Router
  ) {

  }

  swimSets = [...swimSets];

  clickSet(swimSet: SwimSet) {
    this.router.navigate(['/setdetail'], { state: { selectedSet: swimSet } });
  }
}
