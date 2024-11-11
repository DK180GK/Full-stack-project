import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../src/app/auth.service';

@Component({
  selector: 'app-fee-management',
  templateUrl: './fee-payment-portal.component.html',
  styleUrls: ['./fee-payment-portal.component.css'],
})
export class FeeManagementComponent {
  currentDate = new Date();
  selectedTab: string = 'payments';
  username: string = '';
  password: string = '';

  fees = [
    {
      term: '2022-23 ODD SEM FEE',
      category: 'Tuition Fee',
      remarks: '',
      installment: 1,
      amount: 150000,
      status: 'Completed',
    },
    {
      term: '2022-23 ODD SEM FEE',
      category: 'Hostel Fee',
      remarks: '',
      installment: 1,
      amount: 50000,
      status: 'Pay',
    },
  ];

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.username = this.authService.getUsername();
    this.password = this.authService.getPass();
    this.authService.paymentStatus$.subscribe((status) => {
      this.fees.forEach(fee => {
        if (fee.status === 'Pay') {
          fee.status = status;
        }
      });
    });
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  downloadReceipt(fee: any) {
    console.log('Downloading receipt for:', fee);
    // Implement download functionality here
  }

  logout() {
    alert('Logging out...');
    this.router.navigate(['/']);
  }

  printPage() {
    window.print();
  }

  getButtonClass(status: string): string {
    return status.toLowerCase() === 'pay' ? 'btn-pay' : 'btn-completed';
  }

  isButtonDisabled(status: string): boolean {
    return status.toLowerCase() === 'completed';
  }

  handlePayment(fee: any) {
    if (fee.status.toLowerCase() === 'pay') {
      this.router.navigate(['/PaymentPortal'])
      
      console.log('Redirecting to payment portal...');
      // Add routing or redirection logic here
    }
  }
}

