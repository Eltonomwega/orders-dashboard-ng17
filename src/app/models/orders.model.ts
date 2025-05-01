export interface Customer {
    id: number;
    name: string;
    email: string;
    avatar: string;
    location: string;
  }
  
  export interface OrderItem {
    productId: number;
    name: string;
    quantity: number;
    price: number;
    image: string;
  }
  
  export interface Order {
    id: string;
    customer: Customer;
    date: string;
    amount: number;
    status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled' | 'Returned';
    paymentMethod: 'Credit Card' | 'PayPal' | 'Bank Transfer' | 'Cash on Delivery';
    items: OrderItem[];
    trackingNumber?: string;
    estimatedDelivery?: string;
  }