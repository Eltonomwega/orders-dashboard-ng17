import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingBag, faSyncAlt, faTruck, faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stats-cards',
  imports:[CommonModule,FontAwesomeModule],
  templateUrl: './stats-cards.component.html',
  styleUrls: ['./stats-cards.component.css']
})
export class StatsCardsComponent {
  faShoppingBag = faShoppingBag;
  faSyncAlt = faSyncAlt;
  faTruck = faTruck;
  faDollarSign = faDollarSign;
}