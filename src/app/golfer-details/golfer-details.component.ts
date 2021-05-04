import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Golfer, Round } from '../models/golfer';
import { GolferService } from '../services/golfer.service';

@Component({
  selector: 'app-golfer-details',
  templateUrl: './golfer-details.component.html',
  styleUrls: ['./golfer-details.component.scss']
})
export class GolferDetailsComponent implements OnInit {

  golfers: Golfer[];
  selectedGolfer: Golfer;
  routeId: number;

  selectedRound: Round;
  
  constructor(private golferService: GolferService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((val) => {
      if (!this.golfers) { 
        this.routeId = parseInt(val.id);
        return;
      }
      this.setGolfer(parseInt(val.id));
    });

    this.golferService.golfers$.subscribe((res: Golfer[]) =>{
      if (!res) { return; }
      this.golfers = res;
      if(!this.selectedGolfer) {
        this.setGolfer(this.routeId);
      }
    })

  }

  setGolfer(id: number): void {
    this.selectedGolfer = this.golfers.find(g => g.id === id);
    this.selectedRound = this.selectedGolfer.rounds[0];
  }

  setRound(round: Round) {
    this.selectedRound = round;
  }

}
