import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Golfer } from '../models/golfer';

@Injectable({
  providedIn: 'root'
})
export class GolferService {

  private _golfers: BehaviorSubject<Array<Golfer>> = new BehaviorSubject(null);
  public golfers$ = this._golfers.asObservable();

  private _selectedGolfer: BehaviorSubject<Golfer> = new BehaviorSubject(null);
  public selectedGolfer$ = this._selectedGolfer.asObservable();

  constructor() { }

  setGolfers(golfers: Golfer[]) {
    this._golfers.next(golfers);
  }

  setSelectedGolfer(golfer: Golfer) {
    this._selectedGolfer.next(golfer);
  }

}
