import React, { useState } from "react";
import { Friend } from "./Friend";
import { AddForm } from "./AddForm";
import { SplitForm } from "./SplitForm";

export const FriendsList = ({ initialFriends, setInitialFriends }) => {
  const [toggleSplit, setToggleSplit] = useState({});
  const [toggleAddForm, setToggleAddForm] = useState(false);

  const handleSplit = (obj) => {
    setToggleSplit((prev) => {
      return prev.id === obj?.id ? {} : obj;
    });
  };

  const friends = initialFriends.map((friend) => {
    const props = {
      ...friend,
      handleSplit,
      toggleSplit,
    };
    return <Friend key={friend.id} {...props} />;
  });

  return (
    <>
      <div className="sidebar">
        <h2>Friends</h2>
        <ul>{friends}</ul>

        {toggleAddForm && (
          <AddForm
            setInitialFriends={setInitialFriends}
            toggleAddForm={toggleAddForm}
            setToggleAddForm={setToggleAddForm}
          />
        )}

        <button
          className="button"
          onClick={() => setToggleAddForm((prev) => !prev)}
        >
          {!toggleAddForm ? "Add Friend" : "Close"}
        </button>
      </div>

      {Object.keys(toggleSplit).length > 0 && (
        <SplitForm
          toggleSplit={toggleSplit}
          setToggleSplit={setToggleSplit}
          setInitialFriends={setInitialFriends}
        />
      )}
    </>
  );
};
