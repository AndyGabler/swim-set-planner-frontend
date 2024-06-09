import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { SwimSet } from '../swimsets';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-set-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './set-list.component.html',
  styleUrl: './set-list.component.css'
})
export class SetListComponent {
  constructor(
    private router: Router,
    public client: HttpClient
  ) {
    this.swimSets = this.getSets()
  }
  
  swimSets: SwimSet[] = this.getSets()

  getSets(): SwimSet[] {
    let apiSets: SwimSet[] = [];
    this.client.get<SwimSet[]>("/swimsets").forEach(
      setList => setList.forEach(set => apiSets.push(set))
    );
    return apiSets
  }

  clickSet(swimSet: SwimSet) {
    this.router.navigate(['/setdetail'], { state: { selectedSet: swimSet } });
  }
}
