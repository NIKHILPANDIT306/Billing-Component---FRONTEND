import React, { useReducer } from 'react';

const foodprice = { Pizza: 100, Burger: 150, IceCream: 100 };

const initialState = { Pizza: 0, Burger: 0, IceCream: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INC':
      return { ...state, [action.item]: state[action.item] + 1 };
    case 'DEC':
      return { ...state, [action.item]: state[action.item] > 0 ? state[action.item] - 1 : 0 };
    default:
      return state;
  }
}

const BillUseReducer = () => {
  const [foodItem, dispatch] = useReducer(reducer, initialState);

  const total = Object.entries(foodItem).reduce((tot, [item, qty]) => tot + qty * foodprice[item], 0);

  return (
    <div>
      <h4 className="mb-4">Billing with useReducer</h4>
      {Object.entries(foodItem).map(([item, qty]) => (
        <div className="card mb-3 p-3" key={item}>
          <h5>{item}</h5>
          <div className="d-flex gap-3">
            <button className="btn btn-danger" onClick={() => dispatch({ type: 'DEC', item })}>-</button>
            <span>{qty}</span>
            <button className="btn btn-success" onClick={() => dispatch({ type: 'INC', item })}>+</button>
            <span className="ms-auto">Subtotal: ₹{qty * foodprice[item]}</span>
          </div>
        </div>
      ))}
      <h4 className="text-end">Total: ₹{total}</h4>
    </div>
  );
};

export default BillUseReducer;
