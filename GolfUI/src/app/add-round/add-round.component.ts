import { Component, OnInit } from '@angular/core';
import { Course, Golfer, NewRoundRequest, RoundHole } from '../models/golfer';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-round',
  templateUrl: './add-round.component.html',
  styleUrls: ['./add-round.component.scss']
})
export class AddRoundComponent implements OnInit {

  courses: Course[];
  golfers: Golfer[];
  numberOfHoles = new Array(18);

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCourses().subscribe((res: Course[]) => {
      this.courses = res;
    });
    this.dataService.getGolfers().subscribe((res: Golfer[]) => {
      this.golfers = res;
    });
  }

  courseSelectionChange(e) {
    console.log(e.target.value);
    const id = this.courses.find(c => c.name === e.target.value);

  }

  submitRound(e) {
    const target = e.target;

    const courseId = this.courses.find(c => c.name === e.target[0].value).id;
    const golferId = this.golfers.find(c => (c.firstName + ' ' + c.lastName) === e.target[1].value).id;
    const roundHoles = new Array<RoundHole>();
    for(let x = 2; x < 20; x++) {
      if (!target[x].value || target[x].value.trim() === '' || isNaN(target[x].value)) {
        break;
      }
      let roundHole = new RoundHole();
      roundHole.score = target[x].value;
      roundHole.holeId = this.courses.find(c => c.id === courseId).holes[x-2].id;
      roundHoles.push(roundHole);
    }
    if (roundHoles.length === 9 || roundHoles.length === 18) {
    const req: NewRoundRequest = {golferId, courseId, roundHoles, date: '04-26-2021' };
    console.log(req);
      this.dataService.addNewRound(req).subscribe((res) => {
        console.log(res);
      });
    }
  }

}
