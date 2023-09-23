import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-best-restaurants',
  templateUrl: './best-restaurants.component.html',
  styleUrls: ['./best-restaurants.component.scss']
})
export class BestRestaurantsComponent {
      search = faSearch;
}
