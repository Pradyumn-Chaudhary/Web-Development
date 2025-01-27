import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("FirstName");
  const [lastName, setLastName] = useState("LastName");
  const [email, setEmail] = useState("email@example.com");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <form className="row g-3">
        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            value={firstName}
            required
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefault02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault02"
            value={lastName}
            required
            onChange={handleLastNameChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefaultEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="validationDefaultEmail"
            value={email}
            required
            onChange={handleEmailChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault03" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault03"
            required
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="validationDefault04" className="form-label">
            State
          </label>
          <select
            className="form-select"
            id="validationDefault04"
            required
            defaultValue=""
          >
            <option disabled value="">
              Choose...
            </option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationDefault05" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault05"
            required
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
