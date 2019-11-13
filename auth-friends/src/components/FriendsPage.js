import React from "react";
import AddNewFriend from "./AddNewFriend";
import FriendsList from "./FriendsList";

export default function FriendsPage() {
  return (
    <div className="friends-page">
      <FriendsList />
      <br/>
      <AddNewFriend />
    </div>
  );
}
