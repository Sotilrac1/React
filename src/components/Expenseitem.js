import "./Expenseitem.css";

function Expenseitem() {
    const expenseDate = new Date(2023,2,28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div>
        <h2 className="espense-item__description">{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}
export default Expenseitem;
