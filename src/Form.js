import React, { useState } from "react";

export default function Form() {
  const [member, setMember] = useState({
    username: "",
    email: "",
    role: ""
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
        <legend>Join the Team!</legend>
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
          <label>Role</label>

          <div className="col-sm-10">
            <input
              type="role"
              className="form-control"
              name="role"
              placeholder="Describe your role"
              value={member.role}
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
