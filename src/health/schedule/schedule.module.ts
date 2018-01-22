import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ScheduleComponent } from "./containers/schedule/schedule.component";
import { ScheduleCalendarComponent } from "./components/schedule-calendar/schedule-calendar.component";
import { ScheduleControlsComponent } from "./components/schedule-controls/schedule-controls.component";
import { ScheduleDaysComponent } from "./components/schedule-days/schedule-days.component";
import { ScheduleSectionComponent } from "./components/schedule-section/schedule-section.component";

export const ROUTES: Routes = [
  {
    path: "",
    component: ScheduleComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [
    ScheduleComponent,
    ScheduleCalendarComponent,
    ScheduleControlsComponent,
    ScheduleDaysComponent,
    ScheduleSectionComponent
  ],
  providers: []
})
export class ScheduleModule {}
