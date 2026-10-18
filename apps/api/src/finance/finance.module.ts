import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions/transactions.service.js';
import { ReportingService } from './reporting/reporting.service.js';
import { BudgetsService } from './budgets/budgets.service.js';
import { ForecastingService } from './forecasting/forecasting.service.js';

@Module({ providers: [TransactionsService, ReportingService, BudgetsService, ForecastingService] })
export class FinanceModule {}
