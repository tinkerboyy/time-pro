import { Component, Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "schedule-days",
  styleUrls: ["schedule-days.component.scss"],
  template: `
  <div class="days">
    <button
      type="button"
      class="day"
      *ngFor="let day of days; index as i;"
      (click)="selectDay(i)">
       <span [class.active]="i === selected">
        {{ day }}
      </span>
    </button>
  </div>
  `
})
export class ScheduleDaysComponent {
  days = ["M", "T", "W", "T", "F", "S", "SU"];

  @Input() selected: number;

  @Output() select = new EventEmitter<number>();

  selectDay(index: number) {
    this.select.emit(index);
  }
}
