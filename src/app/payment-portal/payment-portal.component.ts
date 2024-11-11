import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { AuthService } from '../../../src/app/auth.service';

@Component({
  selector: 'app-payment-portal',
  templateUrl: './payment-portal.component.html',
  styleUrls: ['./payment-portal.component.css']
})
export class PaymentPortalComponent {
  selectedPaymentMethod: string = '';

  constructor(private router: Router,private _location: Location,private authService: AuthService) {}

  onPaymentMethodChange(method: string) {
    this.selectedPaymentMethod = method;
  }

  proceedWithPayment() {
    if (this.selectedPaymentMethod) {
      alert(`Proceeding with ${this.selectedPaymentMethod} payment.`);
      this.authService.updatePaymentStatus('Completed');

    } else {
      alert('Please select a payment method.');
    }
  }

  backClicked() {
    this._location.back();
  }
}
