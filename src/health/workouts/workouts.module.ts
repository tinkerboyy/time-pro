import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { WorkoutsComponent } from "./containers/workouts/workouts.component";
import { WorkoutComponent } from "./containers/workout/workout.component";
import { WorkoutFormComponent } from "./components/workout-form/workout-form.component";
import { WorkoutTypeComponent } from "./components/workout-type/workout-type.component";

export const ROUTES: Routes = [
  {
    path: "",
    component: WorkoutsComponent
  },
  { path: "new", component: WorkoutComponent },
  { path: ":id", component: WorkoutComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    WorkoutsComponent,
    WorkoutComponent,
    WorkoutFormComponent,
    WorkoutTypeComponent
  ],
  providers: []
})
export class WorkoutsModule {}
