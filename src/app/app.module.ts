import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { RoomViewComponent } from './components/room-view/room-view.component';
import { BookingComponent } from './components/booking/booking.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { StepCounterComponent } from './components/step-counter/step-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomViewComponent,
    BookingComponent,
    SummaryComponent,
    ThankYouComponent,
    SideBarComponent,
    StepCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
