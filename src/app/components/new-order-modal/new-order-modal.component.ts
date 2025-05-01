import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-order-modal',
  standalone: true,
  imports: [CommonModule, DialogModule, InputTextModule, FormsModule],
  templateUrl: './new-order-modal.component.html'
})
export class NewOrderModalComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() orderCreated = new EventEmitter<any>();

  newOrder = {
    customer: {
      name: '',
      email: ''
    },
    date: new Date(),
    amount: null,
    status: 'Pending'
  };

  createOrder() {
    this.orderCreated.emit(this.newOrder);
    this.close();
    this.resetForm();
  }

  close() {
    this.visibleChange.emit(false);
  }

  private resetForm() {
    this.newOrder = {
      customer: {
        name: '',
        email: ''
      },
      date: new Date(),
      amount: null,
      status: 'Pending'
    };
  }
}
