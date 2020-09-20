import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


@Component({
  selector: 'modal-Ticket',
  templateUrl: 'modal-ticket.html',
})
export class ModalTicket implements OnInit{

  @ViewChild('ticket') ticket: ElementRef;

  @Input() movie: string;
  @Input() date: string;
  @Input() schedule: string;
  @Input() placeroom: string;

  @Output() cancelTicket = new EventEmitter();
  constructor( ) {}

  ngOnInit() {
  }


  /**
   * download pdf ticket
   */
  downloadTicket() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const documentDefinition = {content:
      [{
        text: 'You have selected:',
        style: 'header'
      }, {
        columns: [{
          width: '25%',
          text: 'Movie',
          style: 'bigger'
        }, {
          width: '25%',
          text: 'Date',
          style: 'bigger'
        }, {
          width: '25%',
          text: 'ShowTime',
          style: 'bigger'
        }, {
          width: '25%',
          text: 'Place',
          style: 'bigger'
        }]
      } ,{
        columns: [{
          width: '25%',
          text: this.movie
        }, {
          width: '25%',
          text: this.date.toString()
        }, {
          width: '25%',
          text: this.schedule
        }, {
          width: '25%',
          text: this.placeroom + '\n\n'
        }]
      } ,{
        text: 'Thanks from the team of Movies Free',
        comics: true, fontSize: 25
      }],
      styles: {
        header: {
          fontSize: 20,
          bold: true
        },
        bigger: {
          fontSize: 15,
          italics: true
        }
      }
    };
    pdfMake.createPdf(documentDefinition).download();
  }

  /**
   * cancel ticket
   */
  cancelTicketClick() {
    this.cancelTicket.emit(
      {
        schedule: '',
        placeroom: ''
      }
    )
  }
}
