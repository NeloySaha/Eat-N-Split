import { useState } from "react";

export const AddForm = ({
  setInitialFriends,
  toggleAddForm,
  setToggleAddForm,
}) => {
  const [info, setInfo] = useState({
    name: "",
    image: "https://i.pravatar.cc/48",
    balance: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = crypto.randomUUID();

    const newFriendObj = {
      ...info,
      id,
      image: info.image + "?u=" + id,
    };

    setInitialFriends((prevFriends) => {
      return [...prevFriends, newFriendObj];
    });

    setInfo({
      name: "",
      image: `https://i.pravatar.cc/48`,
      balance: 0,
    });

    setToggleAddForm((prev) => !prev);
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="name">👭 Friend Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={info.name}
        onChange={handleChange}
      />

      <label htmlFor="imageUrl">🌄 Image URL</label>
      <input
        type="text"
        id="imageUrl"
        name="image"
        value={info.image}
        onChange={handleChange}
      />

      <button className="button">Add</button>
    </form>
  );
};
