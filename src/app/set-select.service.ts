import { Injectable } from '@angular/core';
import { SwimSet } from './swimsets';

@Injectable()
export class SetSelectService {
  selectedSwimSet: SwimSet|null = null;
}