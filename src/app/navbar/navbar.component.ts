import { Component } from '@angular/core';
import { faPhone, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  call = faPhone;
  email = faEnvelope;
  search = faSearch;
}
