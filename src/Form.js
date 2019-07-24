import React, { useState } from "react";

export default function Form() {
  const [member, setMember] = useState({
    username: "",
    email: "",
    password: ""
  });

  function handleChange(event) {
    const updateMember = { ...member, [event.target.name]: event.target.value };

    setMember(updateMember);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add to List:</legend>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
            Username
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Choose a Username"
                value={member.username}
                onChange={handleChange}
              />
            </div>
          </label>
        </div>
        <div className="form-group">
          <label>Email</label>

          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your mail address"
              value={member.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Password</label>

          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Choose a password"
              value={member.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
}
