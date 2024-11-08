import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-portal',
  templateUrl: './payment-portal.component.html',
  styleUrls: ['./payment-portal.component.css']
})
export class PaymentPortalComponent {
  selectedPaymentMethod: string = '';

  constructor(private router: Router) {}

  onPaymentMethodChange(method: string) {
    this.selectedPaymentMethod = method;
  }

  proceedWithPayment() {
    if (this.selectedPaymentMethod) {
      alert(`Proceeding with ${this.selectedPaymentMethod} payment.`);
    } else {
      alert('Please select a payment method.');
    }
  }

  logout() {
    // Add logout logic here, e.g., clear tokens or user data
    alert("Logging out...");
    this.router.navigate(['/']); // Redirect to login or homepage
  }
}
