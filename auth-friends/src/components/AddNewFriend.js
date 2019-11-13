import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import FriendsList from "./FriendsList";

export default function AddNewFriend() {
  const [newFriend, setNewFriend] = useState({});

  const handleChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    // e.preventDefault();
    setNewFriend({ ...newFriend, id: Date.now() });

    axiosWithAuth()
      .post(`/api/friends`, newFriend)
      .then(response => {
        console.log("add friends response", response);
        this.setState({
          getFriends: response.data
        });
      })
      .catch(err => console.error("friends list error: ", err.response));
  };

  return (
    <div className="friend-form">
      <h4>Add New Friend</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="...name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="...age"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="...email"
          onChange={handleChange}
        />
        <button>Add Friend </button>
      </form>
    </div>
  );
}
