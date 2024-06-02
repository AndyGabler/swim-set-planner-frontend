import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetSelectService } from '../set-select.service';
import { SwimSet } from '../swimsets';

@Component({
  selector: 'app-set-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './set-details.component.html',
  styleUrl: './set-details.component.css',
  providers: [SetSelectService]
})
export class SetDetailsComponent {
  get selectedSet(): SwimSet|null {
    return this.dataService.selectedSwimSet;
  }
  set selectedSet(value: SwimSet|null) {
    this.dataService.selectedSwimSet = value;
  }

  constructor(public dataService: SetSelectService) { }
}
