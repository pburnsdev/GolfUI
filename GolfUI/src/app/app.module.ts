import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ScoreCardComponent } from './score-card/score-card.component';
import { AppRoutingModule } from './app-routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { AddRoundComponent } from './add-round/add-round.component';
import { GolferDetailsComponent } from './golfer-details/golfer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreCardComponent,
    AddCourseComponent,
    AddRoundComponent,
    GolferDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
