import { useState } from "react";
import { FriendsList } from "./FriendsList";
import "./index.css";

function App() {
  const [initialFriends, setInitialFriends] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ]);

  return (
    <>
      <h1>🍔 Eat-N-Split 💰</h1>
      <div className="app">
        <FriendsList
          initialFriends={initialFriends}
          setInitialFriends={setInitialFriends}
        />
      </div>
    </>
  );
}

export default App;
