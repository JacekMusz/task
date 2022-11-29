import NewTransactionForm from "./NewTransactionForm";
import "./content.scss";
import Filters from "./Filters";

const Content = () => {
  return (
    <div className="App-content">
      <div className="form-and-filters-wrapper">
        <NewTransactionForm />
        <Filters />
      </div>
      <div className="transactions-list">table with transactions</div>
    </div>
  );
};

export default Content;
