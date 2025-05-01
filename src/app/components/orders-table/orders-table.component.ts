import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG imports
import { TableModule, Table } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faFilter } from '@fortawesome/free-solid-svg-icons';
import { InputTextModule } from 'primeng/inputtext';
// Models
import { Order } from '../../models/orders.model';
import { NewOrderModalComponent } from '../new-order-modal/new-order-modal.component';
import { BehaviorSubject } from 'rxjs';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    TagModule,
    TooltipModule,
    RippleModule,
    FontAwesomeModule,
    InputTextModule,
    NewOrderModalComponent
  ],
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements OnInit {
  private ordersSubject = new BehaviorSubject<Order[]>([]);
  orders$ = this.ordersSubject.asObservable();

  @ViewChild('dt') table!: Table;

  globalFilter: string = '';
  newOrderDialogVisible = false;
  // Font Awesome icons
  faPlus = faPlus;
  faFilter = faFilter;

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.ordersService.getOrders().subscribe(data => {
      this.ordersSubject.next(data)
    });
  }

  /**
   * Get severity class for status tag
   */
  getStatusSeverity(status: string): string {
    switch (status) {
      case 'Delivered':
        return 'success';
      case 'Shipped':
        return 'info';
      case 'Processing':
        return 'warning';
      case 'Pending':
        return 'warning';
      case 'Cancelled':
        return 'danger';
      case 'Returned':
        return 'danger';
      default:
        return 'info';
    }
  }

  filterGlobal(event: Event) {
    const input = event.target as HTMLInputElement;
    this.table.filterGlobal(input.value, 'contains');
  }

  onOrderCreated(newOrder: Order): void {
    const currentOrders = this.ordersSubject.value;
    this.ordersSubject.next([...currentOrders, newOrder]);
  }
  /**
   * View order details
   */
  viewOrderDetails(order: Order): void {
    console.log('View order:', order);
    // Implement navigation to order details page
  }

  /**
   * Edit order
   */
  editOrder(order: Order): void {
    console.log('Edit order:', order);
    // Implement edit order functionality
  }

  /**
   * Delete order
   */
  deleteOrder(order: Order): void {
    console.log('Delete order:', order);
    // Implement delete order functionality
  }
}