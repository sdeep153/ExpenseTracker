import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const submitHandler = (event) => {
    event.preventDefault();
    
    const newTransaction = {
      id : Math.floor(Math.random()*10000),
      text: text, 
      amount : +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder='Exter text here' value={text} onChange={(event) => setText(event.target.value)} />
        </div>
        <div className='form-control'>
            <label htmlFor='amount'>
                Amount <br/> 
                (negative : expense, positive : income)
            </label>
            <input type="number" placeholder="Enter amount here" value={amount} onChange={(event) => setAmount(event.target.value)}/>
        </div>
        <button className='btn' type='submit'>Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
