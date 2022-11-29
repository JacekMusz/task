import NewTransactionForm from "./NewTransactionForm";
import "./content.scss";
import Filters from "./Filters";
import TransactionList from "./TransactionsList";

const Content = () => {
  return (
    <div className="App-content">
      <div className="form-and-filters-wrapper">
        <NewTransactionForm />
        <Filters />
      </div>
      <TransactionList />
    </div>
  );
};

export default Content;
