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
  orders: Order[] = [];
  loading = true;
  error: string | null = null;
  constructor(
    private ordersService: OrdersService,
    public darkModeService: DarkModeService
  ) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.loading = true;
    this.ordersService.getOrders().subscribe({
      next: (data) => {
        this.orders = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching orders:', err);
        this.error = 'Failed to load orders. Please try again.';
        this.loading = false;
      }
    });
  }
}