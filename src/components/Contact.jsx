import React from "react";

export default function Contact(props) {
  return (
    <div
      id={props.id}
      className="container"
      style={{ marginTop: "56px", marginBottom: "56px", paddingTop: "56px" }}
    >
      <h1 className="text-center">Contact</h1>
      <form style={{ width: "40%", margin: "0 auto" }}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput2">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="name@example.co"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Message</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button
          type="button"
          style={{ display: "block", width: "5vw", margin: "0 auto" }}
          className="btn btn-primary btn-sm"
        >
          Send
        </button>
      </form>
    </div>
  );
}
