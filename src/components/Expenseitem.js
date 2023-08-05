import "./Expenseitem.css";

function Expenseitem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div>
        <h2 className="espense-item__description">{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
export default Expenseitem;
