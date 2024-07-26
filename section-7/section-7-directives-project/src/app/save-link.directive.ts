import { Directive, ElementRef, inject, Input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeave($event)',
  },
})
export class SafeLinkDirective {
  @Input({ alias: 'appSafeLink' }) queryParam: string = 'myapp';
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  constructor() {
    console.log('Safe Link Directive Active');
  }

  onConfirmLeave(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');

    if (wantsToLeave) {
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href =
        address + '?from=' + this.queryParam;
      return;
    }

    event.preventDefault();
  }
}
