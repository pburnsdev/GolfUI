import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course, Golfer, Round } from './models/golfer';
import { DataService } from './services/data.service';
import { GolferService } from './services/golfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GolfUI';
  golfers: Golfer[] = [];
  courses: Course[];
  selectedGolfer: Golfer;

  constructor(private dataService: DataService, private golferService: GolferService) { }

  ngOnInit() {
    this.dataService.getGolfers().subscribe((res: Golfer[]) => {
      this.golfers = res;
      this.golferService.setGolfers(res);
    });
    this.dataService.getCourses().subscribe((res: Course[]) => {
      this.courses = res;
    });
  }

  setSelectedGolfer(golfer: Golfer) {
    this.selectedGolfer = golfer;
  }

}
