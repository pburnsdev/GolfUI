import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddRoundComponent } from './add-round/add-round.component';
import { GolferDetailsComponent } from './golfer-details/golfer-details.component';

const routes: Routes = [
  {path: 'add-course', component: AddCourseComponent },
  {path: 'add-round', component: AddRoundComponent },
  {path: 'golfer/:id', component: GolferDetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
