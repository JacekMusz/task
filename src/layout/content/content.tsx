import './content.scss'

const Content = () => {
    return (
      <div className='App-content'>
        <div className="form-and-filters-wrapper">
            <div className='transaction-form'>new transaction form</div>
            <div className='filters'>
                <div className='balance'>balance</div>
                <div className='filter'>filter</div>
            </div>
        </div>
        <div className='transactions-list'>table with transactions</div>
      </div>
    )
}
  
export default Content;