import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Warning from "../warning/Warning";
import { userAction } from "../../redux/userSlice";
import "./update.css";

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const uname = useSelector((state) => state.user.name);
  const uemail = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  const onUnameChange = (e) => {
    setName(e.target.value);
  };

  const onUemailChange = (e) => {
    setEmail(e.target.value);
  };

  const onClickUpdate = (e) => {
    e.preventDefault();
    dispatch(userAction.updateUserData({ name, email }));
  };

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete">Delete Account</button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={uname}
                onChange={onUnameChange}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder={uemail}
                onChange={onUemailChange}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button onClick={onClickUpdate} className="updateButton">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
