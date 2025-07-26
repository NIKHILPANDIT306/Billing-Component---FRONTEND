import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/billSlice.jsx';

const foodprice = { Pizza: 100, Burger: 150, IceCream: 100 };

const BillRedux = () => {
  const foodItem = useSelector((state) => state.bill);
  const dispatch = useDispatch();

  const total = Object.entries(foodItem).reduce((tot, [item, qty]) => tot + qty * foodprice[item], 0);

  return (
    <div>
      <h4 className="mb-4">Billing with Redux Toolkit</h4>
      {Object.entries(foodItem).map(([item, qty]) => (
        <div className="card mb-3 p-3" key={item}>
          <h5>{item}</h5>
          <div className="d-flex gap-3">
            <button className="btn btn-danger" onClick={() => dispatch(decrement(item))}>-</button>
            <span>{qty}</span>
            <button className="btn btn-success" onClick={() => dispatch(increment(item))}>+</button>
            <span className="ms-auto">Subtotal: ₹{qty * foodprice[item]}</span>
          </div>
        </div>
      ))}
      <h4 className="text-end">Total: ₹{total}</h4>
    </div>
  );
};

export default BillRedux;
