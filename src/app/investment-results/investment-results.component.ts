import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';
type Data = {
  year: number | string;
  interest: number | string;
  valueEndOfYear: number | string;
  annualInvestment: number | string;
  totalInterest: number | string;
  totalAmountInvested: number | string;
};
@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData());
}
