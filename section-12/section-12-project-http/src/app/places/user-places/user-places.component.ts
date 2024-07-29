import { Component, DestroyRef, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  places = this.placesService.loadedUserPlaces;
  isFetching = signal(false);
  error = signal('');
  constructor(
    private placesService: PlacesService,
    private destroyRef: DestroyRef
  ) {}
  ngOnInit() {
    this.isFetching.set(true);
    const subscription = this.placesService.loadUserPlaces().subscribe({
      error: (err: Error) => {
        this.error.set(err.message);
      },
      complete: () => {
        this.isFetching.set(false);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onRemove(place: Place) {
    const subscription = this.placesService.removeUserPlace(place)?.subscribe();
    this.destroyRef.onDestroy(() => {
      subscription!.unsubscribe();
    });
  }
}
