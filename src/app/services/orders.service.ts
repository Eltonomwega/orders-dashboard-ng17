import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Order } from '../models/orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiUrl = 'http://localhost:3000/orders'; // json-server URL

  constructor(private http: HttpClient) {}

  /**
   * Get all orders
   */
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  /**
   * Get a specific order by ID
   */
  getOrderById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${id}`);
  }

  /**
   * Get orders with pagination
   */
  getOrdersPaginated(page: number = 1, limit: number = 10): Observable<Order[]> {
    const params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', limit.toString());
    
    return this.http.get<Order[]>(this.apiUrl, { params });
  }

  /**
   * Get orders filtered by status
   */
  getOrdersByStatus(status: string): Observable<Order[]> {
    const params = new HttpParams().set('status', status);
    return this.http.get<Order[]>(this.apiUrl, { params });
  }

  /**
   * Get orders sorted by date (newest or oldest first)
   */
  getOrdersSortedByDate(ascending: boolean = false): Observable<Order[]> {
    const order = ascending ? 'asc' : 'desc';
    const params = new HttpParams().set('_sort', 'date').set('_order', order);
    return this.http.get<Order[]>(this.apiUrl, { params });
  }

  /**
   * Get orders within date range
   */
  getOrdersByDateRange(startDate: string, endDate: string): Observable<Order[]> {
    return this.getOrders().pipe(
      map(orders => orders.filter(order => {
        const orderDate = new Date(order.date);
        return orderDate >= new Date(startDate) && orderDate <= new Date(endDate);
      }))
    );
  }

  /**
   * Search orders by customer name
   */
  searchOrdersByCustomer(query: string): Observable<Order[]> {
    return this.getOrders().pipe(
      map(orders => orders.filter(order => 
        order.customer.name.toLowerCase().includes(query.toLowerCase())
      ))
    );
  }

  /**
   * Get orders by payment method
   */
  getOrdersByPaymentMethod(method: string): Observable<Order[]> {
    const params = new HttpParams().set('paymentMethod', method);
    return this.http.get<Order[]>(this.apiUrl, { params });
  }

  /**
   * Calculate total revenue from all orders
   */
  getTotalRevenue(): Observable<number> {
    return this.getOrders().pipe(
      map(orders => orders.reduce((total, order) => total + order.amount, 0))
    );
  }

  /**
   * Get order statistics by status
   */
  getOrderStatsByStatus(): Observable<{[key: string]: number}> {
    return this.getOrders().pipe(
      map(orders => {
        const stats: {[key: string]: number} = {};
        orders.forEach(order => {
          if (stats[order.status]) {
            stats[order.status]++;
          } else {
            stats[order.status] = 1;
          }
        });
        return stats;
      })
    );
  }

  /**
   * Create a new order
   */
  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }

  /**
   * Update an existing order
   */
  updateOrder(id: string, updates: Partial<Order>): Observable<Order> {
    return this.http.patch<Order>(`${this.apiUrl}/${id}`, updates);
  }

  /**
   * Update order status
   */
  updateOrderStatus(id: string, status: any): Observable<Order> {
    return this.updateOrder(id, { status });
  }

  /**
   * Delete an order
   */
  deleteOrder(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}