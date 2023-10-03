import React, { useState } from 'react';
import Resultat from './resultat';

export default function Btn(props) {
  // const [selectLeftValue, setSelectLeftValue] = useState('');
  const [selectRightValue, setSelectRightValue] = useState('');
  const [amount, setAmount] = useState("");


  // Add a state to store the selected item object
  const [selectedItem, setSelectedItem] = useState(null); 

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleItemSelect = (e) => {
    const selectedState = e.target.value;
    setSelectRightValue(selectedState);

    // Find the item object corresponding to the selected state
    const selectedItem = props.items.find(item => item.state === selectedState);
    setSelectedItem(selectedItem);
  };

  // const echangerValeurs = () => {
  //   const temp = selectLeftValue;
  //   setSelectLeftValue(selectRightValue);
  //   setSelectRightValue(temp);
  // };

  return (
    <div className='d-flex justify-content-center row col-6'>
      <form>
        <input
          type="number"
          name="entrance"
          placeholder="Enter Amount..."
          className="form-control d-inline m-1"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </form>
      <div className='text-center pt-3'>
        <div >
          <h4 className='display-6 text-white'>From : USD</h4>
        </div>
        <div className='text-white p-3'>
          <i className="bi bi-arrow-down-up"></i>
          <svg 
          // {onClick={echangerValeurs}} 
            xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
        </div>
        <div >
          <select className='btn btn-outline-light btn-lg m-2 text-center'
            value={selectRightValue}
            // Use the selection management function
            onChange={handleItemSelect} 
          >
            <option className="text-muted" value="null">enter your devise</option>
           {props.items.map(item => (
              <option key={item.state} value={item.state} >
                {item.state.substring(3)}
              </option>
            ))}
          </select>
        </div>
        <Resultat amount={amount} selectedItem={selectedItem} /> {/* send object selectedItem */}
      </div>
    </div>
  );
}
