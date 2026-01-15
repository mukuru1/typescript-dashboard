// features/expense/expenseType.ts

export interface Expense {
  id: string
  title: string
  amount: number
  category: string
  date: string
}

export interface ExpenseState {
  expenses: Expense[]
  totalAmount: number
  isLoading: boolean
  error: string | null
}
