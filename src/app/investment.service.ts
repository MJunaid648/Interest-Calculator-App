import { Injectable } from '@angular/core';
import type { AnnualData, InvestmentInput } from './investment-input.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  resultData?: AnnualData[];
  
  calculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, annualInvestment, duration, expectedReturn } =
      data;

    let investmentValue = initialInvestment;
    const annualData: AnnualData[] = [];

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.resultData = annualData;
  }
}
