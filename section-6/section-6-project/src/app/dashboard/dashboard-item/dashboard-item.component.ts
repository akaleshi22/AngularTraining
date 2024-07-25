import { Component, Input } from '@angular/core';
import { CustomImage } from './dashboard-item.model';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  @Input({required: true}) image!: CustomImage;
  @Input({required: true}) title!: string;
}
