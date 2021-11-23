import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses (props) {
  return (
    <div className="expenses">
      {props.expenses.map((value, index) => {
        return <ExpenseItem {...value} />
      })}
    </div>
  )
}

export default Expenses
