import React from "react";
import { useSelector } from "react-redux";
import "./warning.css";

export default function Warning() {
  const uname = useSelector(state=>state.user.name);

  return (
    <div className="warning">
      Deleting account cannot be undone <b>{uname}</b>! You should confirm your
      password to delete your account.
    </div>
  );
}
