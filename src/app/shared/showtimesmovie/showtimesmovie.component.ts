import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-showtime',
  templateUrl: './showtimesmovie.component.html',
  styleUrls: ['./showtimesmovie.component.css']
})
export class ShowtimesmovieComponent implements OnInit {

  @Output() showtime = new EventEmitter();

  listSchedule: any [] = [{
    schedule: '9:00 hrs - 10:00 hrs'
  }, {
    schedule: '10:30 hrs - 11:30 hrs'
  }, {
    schedule: '12:00 hrs - 13:00 hrs'
  }, {
    schedule: '13:30 hrs - 14:30 hrs'
  }, {
    schedule: '15:00 hrs - 16:00 hrs'
  }, {
    schedule: '16:30 hrs - 17:30 hrs'
  }, {
    schedule: '18:00 hrs - 19:00 hrs'
  }, {
    schedule: '19:30 hrs - 20:30 hrs'
  }, {
    schedule: '21:00 hrs - 22:00 hrs'
  }, {
    schedule: '22:30 hrs - 13:00 hrs'
  }];

  datesScheduler: any [] = [];
  scheduleDay: any[] = [];

  constructor() { }

  ngOnInit() {
    this.loadShowTimes();
    this.scheduleDay = this.loadSchedules();
    console.log(this.scheduleDay);

  }

  /**
   * array showtime  of day
   */
  loadShowTimes() {
    for (let i = 0; i < 5; i++) {
      const date = new Date();
      date.setDate( date.getDate() + i);
      this.datesScheduler.push(date);
    }
  }

  /**
   *
   */
  loadSchedules(): any [] {
    const tmp: any [] = [];
    for (let i = 0; i <= 5 ; i++) {
      const time = this.listSchedule[Math.floor (Math.random() * this.listSchedule.length)];
      console.log(time);
      if (tmp.indexOf(time) === -1) {
        tmp.push(time);
      }
      console.log(tmp);
    }
    return tmp.sort();
  }

  /**
   * send to timeshow of root component
   * @param showtimeSelect
   */
  getShowTime(showDateSelect, showtimeSelect) {
    this.showtime.emit({
      showtime: {date: showDateSelect , time: showtimeSelect}
    });
  }
}
