import React from "react";
import "./Transaction.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, setProfile } from "../redux/actions/userActions";

function Transaction() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.auth.token.token);
  const [show, setShow] = useState(true);
  const [userFirstname, setUserFirstname] = useState("");
  const [userLastName, setUserLastName] = useState("");

  useEffect(() => {
    if (token) {
      getUserData().then();
    }
  }, []);
  const getUserData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        const userData = {
          email: data.body.email,
          firstname: data.body.firstName,
          lastname: data.body.lastName,
          username: data.body.userName,
        };
        dispatch(setProfile(userData));
      } else {
        console.log("Erreur lors de la récupération du profil utilisateur");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ firstName: userFirstname, lastName: userLastName }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        const firstameInput = userFirstname;
        const lastnameInput = userLastName;
        const dataName = {
          lastname: lastnameInput,
          firstname: firstameInput,
          email: data.body.email,
          username: data.body.userName,
        };
        dispatch(editUser(dataName));
        setShow(!show);
      } else {
        console.log("Changement utilisateur incorrect");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="main bg-dark">
      {show ? (
        <div className="header">
          <h1>
            Welcome back !<br />
            <span id="fullName"> {userData.firstname}</span>
          </h1>
          <button
            className="edit-button"
            id="edit-button"
            type="button"
            onClick={() => setShow(!show)}
          >
            Edit Name
          </button>
        </div>
      ) : (
        <div id="edit-section">
          <form name="edit">
            <div className="flexinput">

            <div className="edit-input">
              <label className="name" htmlFor="firstname">Firstname:</label>
              <input
                type="text"
                id="firstname"
                className="input"
                defaultValue={userData.firstname}
                onChange={(e) => setUserFirstname(e.target.value)} 
                />
            </div>
            <div className="profil-input-wrapper">
              <label className="name" htmlFor="lastname">lastname :</label>
              <input
                type="text"
                id="lastname"
                className="input"
                defaultValue={userData.lastname}
                onChange={(e) => setUserLastName(e.target.value)} 
                />
          
            </div>
                </div>
          </form>
          <div className="btn-form">
            <button className="save-button" onClick={handleEdit}>
              Save
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={() => setShow(!show)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Transaction;
