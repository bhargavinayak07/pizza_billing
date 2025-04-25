import React, { useState } from 'react';

const PizzaBillingApp = () => {
  const [size, setSize] = useState('');
  const [toppings, setToppings] = useState([]);
  const [total, setTotal] = useState(null);

  const sizePrices = {
    Small: 5,
    Medium: 8,
    Large: 12,
  };

  const toppingPrices = {
    Cheese: 2,
    Paneer: 3,
    Mushrooms: 1.5,
  };

  const handleToppingChange = (e) => {
    const { value, checked } = e.target;
    setToppings((prev) =>
      checked ? [...prev, value] : prev.filter((t) => t !== value)
    );
  };

  const calculateTotal = () => {
    if (!size) {
      alert('Please select a pizza size.');
      return;
    }

    const basePrice = sizePrices[size];
    const toppingPrice = toppings.reduce((sum, item) => sum + toppingPrices[item], 0);
    setTotal(basePrice + toppingPrice);
  };

  return (
    <div>
      <h1>Pizza Billing App </h1>

      <h3>Select Size:</h3>
      {Object.entries(sizePrices).map(([s, price]) => (
        <label key={s}>
          <input
            type="radio"
            name="size"
            value={s}
            onChange={(e) => setSize(e.target.value)}
          />
          {s} (${price})
          <br />
        </label>
      ))}

      <h3>Select Toppings:</h3>
      {Object.entries(toppingPrices).map(([topping, price]) => (
        <label key={topping}>
          <input
            type="checkbox"
            value={topping}
            onChange={handleToppingChange}
          />
          {topping} (${price})
          <br />
        </label>
      ))}

      <button onClick={calculateTotal}>Calculate Total</button>

      {total !== null && <h2>Total: ${total.toFixed(2)}</h2>}
    </div>
  );
};

export default PizzaBillingApp;
