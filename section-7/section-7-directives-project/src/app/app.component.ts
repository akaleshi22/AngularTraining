import { Component, computed } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { AuthDirective } from './auth/auth.directive';
import { AuthService } from './auth/auth.service';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    AuthComponent,
    LearningResourcesComponent,
    CommonModule,
    AuthDirective,
  ],
})
export class AppComponent {
  constructor(private authService: AuthService) {}
  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
