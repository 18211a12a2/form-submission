import React, { useState } from "react";

const FormData = () => {
  const [formdatafinal, setFormdatafinal] = useState(null);
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    address: "",
    phonenumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdatafinal(details);
  };
  return (
    <div className="inside">
      <form onSubmit={handleSubmit}>
        <div className="form-element">
          <label>First Name:</label>
          <input type="text" name="fname" onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Last Name:</label>
          <input type="text" name="lname" onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Phone number:</label>
          <input type="tel" name="phonenumber" onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Address:</label>
          <input type="text" name="address" onChange={handleChange} />
        </div>
        <br />
        <button type="submit">Submit here!</button>
      </form>

      {formdatafinal && (
        <div className="reder">
          <h2>Submitted data</h2>
          <p>{formdatafinal.fname}</p>
          <p>{formdatafinal.lname}</p>
          <p>{formdatafinal.phonenumber}</p>
          <p>{formdatafinal.email}</p>
          <p>{formdatafinal.address}</p>
        </div>
      )}
    </div>
  );
};

export default FormData;
