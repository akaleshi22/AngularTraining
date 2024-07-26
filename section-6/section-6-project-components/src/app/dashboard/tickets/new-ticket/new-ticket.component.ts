import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { TicketData } from './new-ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  @Output() add = new EventEmitter<TicketData>();
  enteredTitle = '';
  enteredText = '';
  onSumbit() {
    const ticketData: TicketData = {
      title: this.enteredTitle,
      text: this.enteredText,
    };
    this.add.emit(ticketData);
    this.enteredText = '';
    this.enteredTitle = '';
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngAfterViewInit(): void {
    console.log('After View INIT');
  }
}
