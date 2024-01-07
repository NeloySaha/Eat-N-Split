import React, { useEffect, useState } from "react";

export const SplitForm = ({
  toggleSplit,
  setToggleSplit,
  setInitialFriends,
}) => {
  const { name, id } = toggleSplit;
  const [cost, setCost] = useState({
    yourExpense: 0,
    bill: 0,
    payer: "You",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSplit = (e) => {
    e.preventDefault();

    setInitialFriends((prevArr) => {
      const newBalance =
        cost.payer === "You" ? cost.bill - cost.yourExpense : -cost.yourExpense;

      const newFriendsArr = prevArr.map((prev) =>
        prev.id === id ? { ...prev, balance: newBalance } : prev
      );

      return newFriendsArr;
    });

    setCost({
      yourExpense: 0,
      bill: 0,
      payer: "You",
    });

    setToggleSplit({});
  };

  return (
    <form className="form-split-bill" onSubmit={handleSplit}>
      <h2>Split a bill with {name}</h2>

      <label htmlFor="billValue">💰 Bill value</label>
      <input
        type="number"
        id="billValue"
        name="bill"
        value={cost.bill}
        onChange={handleChange}
      />

      <label htmlFor="yourExpense">🧍‍♀️ Your Expense</label>
      <input
        type="number"
        id="yourExpense"
        name="yourExpense"
        value={cost.yourExpense}
        onChange={handleChange}
      />

      <label htmlFor="friendExpense">👭 {name}'s Expense:</label>
      <input
        type="number"
        id="friendExpense"
        disabled={true}
        value={cost.bill - cost.yourExpense}
      />

      <label htmlFor="billPayer">🤑 Who is paying the bill?</label>
      <select id="billPayer" name="payer" onChange={handleChange}>
        <option value="You">You</option>
        <option value={name}>{name}</option>
      </select>

      <button className="button">Split bill</button>
    </form>
  );
};
