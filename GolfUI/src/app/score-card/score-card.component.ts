import { Component, Input, OnInit } from '@angular/core';
import { Round, RoundHole } from '../models/golfer';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {

  _round: Round;
  get round() {
    return this._round
  }

  @Input() set round(val: Round) {
    if (!val) { return; }
    this.frontNine = val.roundHoles.slice(0, 9);
    this.backNine = val.roundHoles.slice(0, 9);
  }

  _frontNine: RoundHole[];
  get frontNine() {
    return this._frontNine;
  }
  set frontNine(val: RoundHole[]) {
    this._frontNine = val;
  }

  _backNine: RoundHole[];
  get backNine() {
    return this._backNine;
  }
  set backNine(val: RoundHole[]) {
    this._backNine = val;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
