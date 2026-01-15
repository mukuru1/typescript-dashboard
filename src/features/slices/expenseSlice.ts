// features/expense/expenseSlice.ts

import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import type { Expense, ExpenseState } from '../../types/expenseType'

const initialState: ExpenseState = {
  expenses: [],
  totalAmount: 0,
  isLoading: false,
  error: null,
}

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense: {
      reducer(state, action: PayloadAction<Expense>) {
        state.expenses.push(action.payload)
        state.totalAmount += action.payload.amount
      },
      prepare(expense: Omit<Expense, 'id' | 'date'> & { date?: string }) {
        return {
          payload: {
            id: nanoid(),
            title: expense.title,
            amount: expense.amount,
            category: expense.category,
            date: expense.date ?? new Date().toISOString(),
          } as Expense,
        }
      },
    },

    removeExpense(state, action: PayloadAction<string>) {
      const expense = state.expenses.find(e => e.id === action.payload)
      if (expense) {
        state.totalAmount -= expense.amount
        state.expenses = state.expenses.filter(e => e.id !== action.payload)
      }
    },

    updateExpense(
      state,
      action: PayloadAction<{ id: string; updatedData: Partial<Expense> }>
    ) {
      const { id, updatedData } = action.payload
      const expense = state.expenses.find(e => e.id === id)

      if (expense) {
        state.totalAmount -= expense.amount
        Object.assign(expense, updatedData)
        state.totalAmount += expense.amount
      }
    },

    clearExpenses() {
      return initialState
    },
  },
})

export const {
  addExpense,
  removeExpense,
  updateExpense,
  clearExpenses,
} = expenseSlice.actions

export default expenseSlice.reducer
