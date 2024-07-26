import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  @Input({ required: true }) data!: Ticket;
  @Output() close = new EventEmitter();
  detailsVisbile = signal(false);

  onToggleDetails() {
    this.detailsVisbile.set(!this.detailsVisbile());
  }
  onCloseTicket() {
    this.close.emit();
  }
}
