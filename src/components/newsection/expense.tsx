import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { addExpense, removeExpense, clearExpenses } from '../../features/slices/expenseSlice'

const Expense = () => {
  const dispatch = useDispatch()
  const { expenses, totalAmount } = useSelector(
    (state: RootState) => state.expense
  )

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState<number>(0)
  const [category, setCategory] = useState('General')


  useEffect(() => {
    const stored = localStorage.getItem('expenses')
    if (stored) {
      JSON.parse(stored).forEach((exp: any) => dispatch(addExpense(exp)))
    }
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

 
  const handleAddExpense = () => {
    if (!title || amount <= 0) return
    dispatch(addExpense({ title, amount, category }))
    setTitle('')
    setAmount(0)
    setCategory('General')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          💸 Expense Tracker
        </h2>

        
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Expense title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option>General</option>
            <option>Food</option>
            <option>Transport</option>
            <option>Education</option>
            <option>Entertainment</option>
            <option>Health</option>
            <option>Other</option>
          </select>

          <button
            onClick={handleAddExpense}
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Add Expense
          </button>
        </div>

     
        <div className="mt-6 space-y-2">
          {expenses.length === 0 ? (
            <p className="text-center text-gray-500">
              No expenses added yet
            </p>
          ) : (
            expenses.map(exp => (
              <div
                key={exp.id}
                className="flex justify-between items-center bg-gray-50 border rounded-md p-2"
              >
                <div>
                  <p className="font-medium">{exp.title}</p>
                  <p className="text-sm text-gray-500">
                    FRW{exp.amount} • {exp.category}
                  </p>
                </div>

                <button
                  onClick={() => dispatch(removeExpense(exp.id))}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

      
        <div className="mt-6 border-t pt-4">
          <p className="text-lg font-semibold text-center">
            Total: FRW{totalAmount}
          </p>

          <button
            onClick={() => {
              dispatch(clearExpenses())
              localStorage.removeItem('expenses')
            }}
            className="w-full mt-3 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  )
}

export default Expense
