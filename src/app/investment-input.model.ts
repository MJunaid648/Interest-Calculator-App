export interface InvestmentInput {
  initialInvestment: number;
  annualInvestment: number;
  duration: number;
  expectedReturn: number;
}

export type AnnualData = {
  year: number | string;
  interest: number | string;
  valueEndOfYear: number | string;
  annualInvestment: number | string;
  totalInterest: number | string;
  totalAmountInvested: number | string;
};