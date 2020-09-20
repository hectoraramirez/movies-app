import { ModalTicket } from './modal-ticket';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  id: any;
  title: any;
  movieDesc$;

  public showDate: any = '';
  public showtime: any = '';
  public placeRoom: any = '';

  constructor( private rout: ActivatedRoute, private dialog: MatDialog) {
    this.id = this.rout.snapshot.paramMap.get('id');
    this.title = this.rout.snapshot.paramMap.get('title');
  }

  ngOnInit() {

  }

  /**
   * get information of showtime
   * @param event
   */
  getShowtime(event) {
    this.showtime = event.showtime.time;
    this.showDate = event.showtime.date;
  }

  /**
   * send information of ticket
   * @param event
   */
  sendTicket(event) {
    this.placeRoom =  event.place;
  }

  /**
   *
   */
  cancelTicket(event) {
    this.showtime = event.schedule;
    this.placeRoom = event.placeroom;
  }
}


