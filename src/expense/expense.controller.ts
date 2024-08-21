import { Controller, Get, Post, Body } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { Expense } from '../schemas/expense.schema';

@Controller('expenses')
export class ExpenseController {
  constructor(private expenseService: ExpenseService) {}

  @Post()
  async create(
    @Body()
    payload: {
      name: string;
      quantity: number;
      category: string;
    },
  ): Promise<Expense> {
    return this.expenseService.create(payload);
  }
}
