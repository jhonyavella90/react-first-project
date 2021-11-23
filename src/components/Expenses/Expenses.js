import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = props => {
  return (
    <Card className="expenses">
      {props.expenses.map((value, index) => {
        return <ExpenseItem key={index} {...value} />
      })}
    </Card>
  )
}

export default Expenses
