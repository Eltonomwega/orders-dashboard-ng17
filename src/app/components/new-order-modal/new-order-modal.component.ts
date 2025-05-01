import { Component, EventEmitter,OnInit, Input, Output, model } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../models/orders.model';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import {FieldsetModule} from 'primeng/fieldset';
import {InputNumberModule} from 'primeng/inputnumber';
import { DatePicker } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-new-order-modal',
  imports:[CommonModule, DialogModule, ReactiveFormsModule, FieldsetModule, InputNumberModule, InputTextModule, SelectModule, DatePicker, ButtonModule],
  templateUrl: './new-order-modal.component.html',
  styleUrls: ['./new-order-modal.component.css']
})
export class NewOrderModalComponent {
  visible = model<boolean>(false);
  @Output() orderCreated = new EventEmitter<Order>();
  @Input() order: Order | null = null;
  @Output() orderUpdated = new EventEmitter<Order>();
  @Output() closed = new EventEmitter<void>();
  btnaction = "";

  statusOptions = [
    { label: 'Pending', value: 'Pending' },
    { label: 'Processing', value: 'Processing' },
    { label: 'Shipped', value: 'Shipped' },
    { label: 'Delivered', value: 'Delivered' },
    { label: 'Cancelled', value: 'Cancelled' },
    { label: 'Returned', value: 'Returned' }
  ];

  paymentOptions = [
    { label: 'Credit Card', value: 'Credit Card' },
    { label: 'PayPal', value: 'PayPal' },
    { label: 'Bank Transfer', value: 'Bank Transfer' },
    { label: 'Cash on Delivery', value: 'Cash on Delivery' }
  ];

  orderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      customer: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        avatar: [''],
        location: ['']
      }),
      date: [new Date(), Validators.required],
      amount: [0, [Validators.required, Validators.min(0)]],
      status: ['Pending', Validators.required],
      paymentMethod: ['Credit Card', Validators.required],
      items: this.fb.array([this.createItem()])
    });
  }
 ngOnChanges(): void {
    this.btnaction = "Create Order";
    if (this.order){
      this.btnaction = "Edit Order"
      this.order.date = new Date(this.order.date)
      this.orderForm.patchValue(this.order);
    }
  }
  get items() {
    return this.orderForm.get('items') as any;
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      productId: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0)]],
      image: ['']
    });
  }

  addItem(): void {
    this.items.push(this.createItem());
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }
  generateRandomId(): string {
    return Math.random().toString(36).substring(2, 10);
  }
  
  submitOrder(): void {
    if (this.orderForm.invalid) return;
    if (this.order) {
      const updatedOrder = { ...this.order, ...this.orderForm.value };
      this.orderUpdated.emit(updatedOrder);
    } else {
      const newOrder = this.orderForm.value;
      this.orderCreated.emit(newOrder);
    }
    this.orderForm.reset();
    this.close();
  }

  close(): void {
    this.orderForm.reset();
    this.order = null;
    this.visible.set(false);
  }
}