import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/orders.model';
import { OrdersService } from '../../services/orders.service';
import { DarkModeService } from '../../services/dark-mode.service';
import { StatsCardsComponent } from '../../components/stats-cards/stats-cards.component';
import { OrdersTableComponent } from '../../components/orders-table/orders-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, StatsCardsComponent,OrdersTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loading = true;
  error: string | null = null;
  constructor(
    public darkModeService: DarkModeService
  ) {}

  ngOnInit(): void {
  }

}