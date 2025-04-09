import { Component, Input } from '@angular/core';
import type { AnnualData } from '../investment-input.model';
import { CurrencyPipe } from '@angular/common';
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
  @Input() results?: AnnualData[];
}
