import React, { useState } from 'react';

const foodprice = { Pizza: 100, Burger: 150, IceCream: 100 };

const BillUseState = () => {
  const [foodItem, setFoodItem] = useState({ Pizza: 0, Burger: 0, IceCream: 0 });

  const dec = (item) => {
    setFoodItem((prev) => ({ ...prev, [item]: prev[item] > 0 ? prev[item] - 1 : 0 }));
  };

  const inc = (item) => {
    setFoodItem((prev) => ({ ...prev, [item]: prev[item] + 1 }));
  };

  const total = Object.entries(foodItem).reduce((tot, [item, qty]) => tot + qty * foodprice[item], 0);

  return (
    <div>
      <h4 className="mb-4">Billing with useState</h4>
      {Object.entries(foodItem).map(([item, qty]) => (
        <div className="card mb-3 p-3" key={item}>
          <h5>{item}</h5>
          <div className="d-flex gap-3">
            <button className="btn btn-danger" onClick={() => dec(item)}>-</button>
            <span>{qty}</span>
            <button className="btn btn-success" onClick={() => inc(item)}>+</button>
            <span className="ms-auto">Subtotal: ₹{qty * foodprice[item]}</span>
          </div>
        </div>
      ))}
      <h4 className="text-end">Total: ₹{total}</h4>
    </div>
  );
};

export default BillUseState;
