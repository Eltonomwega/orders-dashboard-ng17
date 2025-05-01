import { Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { faStore, faShoppingBag, faUsers, faBoxOpen, faChartLine, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule], // Make sure to import FontAwesomeModule
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  faStore = faStore;
  faShoppingBag = faShoppingBag;
  faUsers = faUsers;
  faBoxOpen = faBoxOpen;
  faChartLine = faChartLine;
  faCog = faCog;

  constructor(public darkModeService: DarkModeService) {}
}