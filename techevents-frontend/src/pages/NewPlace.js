import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./user-form.css";

const NewPlace = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [error, setError] = useState(false);
  let history = useHistory();

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      enteredTitle === "" ||
      enteredDescription === "" ||
      enteredAddress === ""
    ) {
      setError(true);
      return;
    }
    const dataToBeSubmitted = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: enteredTitle,
        description: enteredDescription,
        address: enteredAddress,
      }),
    };
    fetch("http://localhost:5000/api/events", dataToBeSubmitted).then(
      (response) => response.json()
    );
    history.push("/");

    setEnteredTitle("");
    setEnteredAddress("");
    setEnteredDescription("");
    setError(false);
  };

  return (
    <form className="user-form" onSubmit={submitHandler}>
      {error && <p>Please enter title, description or address</p>}
      <label htmlFor="title">Title</label>
      <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      <br />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        value={enteredDescription}
        onChange={descriptionChangeHandler}
      />
      <br />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        value={enteredAddress}
        onChange={addressChangeHandler}
      />
      <br />

      <button type="submit">Add Place</button>
    </form>
  );
};

export default NewPlace;