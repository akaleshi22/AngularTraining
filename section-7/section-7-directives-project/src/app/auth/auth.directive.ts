import {
  Directive,
  effect,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  @Input({ required: true, alias: 'appAuth' }) userType!: Permission;
  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<HTMLParagraphElement>,
    private viewContainerRef: ViewContainerRef
  ) {
    effect(() => {
      if (this.authService.activePermission() === this.userType) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
