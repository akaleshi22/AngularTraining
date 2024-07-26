import { Component, EventEmitter, Input, model, Output } from '@angular/core';
import { Rect } from './rect.model';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  // @Input({required: true}) size!: Rect;
  // @Output() sizeChange = new EventEmitter<Rect>(); 
  size = model.required<Rect>()
  onReset() {
    // this.sizeChange.emit ({
    //   width: "100",
    //   height:"100"
    // })
    this.size.set({
        width: "100",
        height:"100"
       })
  }
}
