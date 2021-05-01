import { Component, OnInit } from '@angular/core';
import { Course, Golfer, Round } from './models/golfer';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GolfUI';
  golfers: Golfer[] = [];
  courses: Course[];
  selectedRound: Round;

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.dataService.getGolfers().subscribe((res: Golfer[]) => {
      this.golfers = res;
      this.selectedRound = this.golfers[0].rounds[1];
    });
    this.dataService.getCourses().subscribe((res: Course[]) => {
      this.courses = res;
    });
  }
}
