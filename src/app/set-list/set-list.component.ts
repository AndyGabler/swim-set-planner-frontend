import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { SetSelectService } from '../set-select.service';
import { SwimSet } from '../swimsets';
import { swimSets } from '../swimsets';

@Component({
  selector: 'app-set-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './set-list.component.html',
  styleUrl: './set-list.component.css',
  providers: [SetSelectService]
})
export class SetListComponent {
  swimSets = [...swimSets];
  get selectedSet(): SwimSet|null {
    return this.dataService.selectedSwimSet;
  }
  set selectedSet(value: SwimSet|null) {
    this.dataService.selectedSwimSet = value;
  }

  constructor(public dataService: SetSelectService) { }
}
