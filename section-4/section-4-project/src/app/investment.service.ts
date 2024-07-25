import { Injectable, signal } from '@angular/core';
import { UserData, AnnualData } from './app.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
    resultData = signal<AnnualData[]|undefined>(undefined);
    onCalculateInvestmentResults(data: UserData) {
        const { initialInvestment, duration, expectedReturn, annualInvestment } =
          data;
        const annualData = [];
        let investmentValue = initialInvestment;
    
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
    
          const data: AnnualData = {
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          };
          annualData.push(data);
        }
        this.resultData.set(annualData);
      }
}
