import { Component, OnInit } from '@angular/core';
import { Hole, NewCourseRequest } from '../models/golfer';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  courseName = '';
  numberOfHoles = new Array(18);
  holes: Hole[] = [];
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  submitCourse(e) {
    const target = e.target;
    this.courseName = target[0].value;
    for(let x = 1; x < 19; x++) {
      if (!target[x].value || target[x].value.trim() === '' || isNaN(target[x].value)) {
        break;
      }
      let h = new Hole();
      h.par = target[x].value;
      h.holeNumber = x;
      this.holes.push(h);
    }
    if (this.holes.length === 9 || this.holes.length === 18) {
      const req: NewCourseRequest = {holes: this.holes, name: this.courseName};
      this.dataService.addNewCourse(req).subscribe((res) => {
        console.log(res);
        this.holes = [];
      });
    }
  }
}
