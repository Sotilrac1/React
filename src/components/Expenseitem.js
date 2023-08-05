import ".//Expenseitem.css";

function Expenseitem() {
  return (
    <div className="expense-item">
      <div>March 28th 2023</div>
      <div>
        <h2 className="espense-item__description">Insurance</h2>
        <div className="expense-item__price">249.67</div>
      </div>
    </div>
  );
}
export default Expenseitem;
