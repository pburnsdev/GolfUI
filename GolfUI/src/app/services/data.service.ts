import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course, Golfer, NewCourseRequest, Round } from '../models/golfer';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private _url = 'https://localhost:5001/api/';
  
  constructor(private http: HttpClient) { }
  
  public getGolfers(): Observable<Array<Golfer>> {
    const url = this._url + 'golfers';
    return this.http.get<Array<Golfer>>(url);
  }
  
  public getRounds(): Observable<Array<Round>> {
    const url = this._url + 'rounds';
    return this.http.get<Array<Round>>(url);
  }

  public getCourses(): Observable<Array<Course>> {
    const url = this._url + 'courses';
    return this.http.get<Array<Course>>(url);
  }

  public addNewCourse(req: NewCourseRequest) {
    const url = this._url + 'courses';
    return this.http.post(url, req);
  }
}
