import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";
import { OnChanges } from "@angular/core/src/metadata/lifecycle_hooks";
import {
  ScheduleItem,
  ScheduleList
} from "../../../shared/services/schedule/schedule.service";

@Component({
  selector: "schedule-calendar",
  styleUrls: ["schedule-calendar.component.scss"],
  template: `
  <div class="calendar">
    <schedule-controls
      [selected]="selectedDay"
      (move)="onChange($event)"
      >
    </schedule-controls>

    <schedule-days
      [selected]="selectedDayIndex"
      (select)="selectDay($event)"
      >
    </schedule-days>

    <schedule-section
      *ngFor="let section of sections"
      [name]="section.name"
      [section]="getSection(section.key)">
    </schedule-section>
  </div>
  `
})
export class ScheduleCalendarComponent implements OnChanges {
  selectedDay: Date;
  selectedDayIndex: number;
  selectedWeek: Date;

  sections = [
    { key: "morning", name: "Morning" },
    { key: "lunch", name: "Lunch" },
    { key: "evening", name: "Evening" },
    { key: "snacks", name: "Snacks and Drinks" }
  ];

  @Input()
  set date(date: Date) {
    // console.log(date.getTime());
    this.selectedDay = new Date(date.getTime());
    // console.log(this.selectedDay);
  }

  @Input() items: ScheduleList;

  @Output() change = new EventEmitter<Date>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedDayIndex = this.getToday(this.selectedDay);
    this.selectedWeek = this.getStartOfWeek(new Date(this.selectedDay));
    console.log(this.selectedWeek);
  }

  getSection(name: string): ScheduleItem {
    return (this.items && this.items[name]) || {};
  }

  getToday(date: Date): number {
    let today = date.getDay() - 1;
    if (today < 0) {
      today = 6;
    }

    return today;
  }

  selectDay(index: number) {
    const selectedDay = new Date(this.selectedWeek);
    selectedDay.setDate(selectedDay.getDate() + index);
    this.change.emit(selectedDay);
  }

  onChange(weekOffset: number) {
    const offset = weekOffset * 7;
    const startOfWeek = this.getStartOfWeek(new Date());
    const startDate = new Date(
      startOfWeek.getFullYear(),
      startOfWeek.getMonth(),
      startOfWeek.getDate()
    );
    startDate.setDate(startDate.getDate() + offset);
    this.change.emit(startDate);
  }

  private getStartOfWeek(date: Date) {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }
}
