import { Injectable } from '@nestjs/common';
import { Expense } from '../schemas/expense.schema';
import { ExpenseRepository } from '../repositories/expense.repository';

@Injectable()
export class ExpenseService {
  constructor(private expenseRepository: ExpenseRepository) {}

  async create(expense: Expense): Promise<Expense> {
    return this.expenseRepository.create(expense);
  }
}
