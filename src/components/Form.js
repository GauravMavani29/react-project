import React, { useState } from "react";
function Form({ filterData }) {
  const [value, setValue] = useState({
    fname: "",
    lname: "",
    email: "",
    gender: "",
    address: "",
    mno: "",
  });
  const [error, setError] = useState({
    fname: "",
    lname: "",
    email: "",
    mno: "",
  });
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    email: "",
    gender: "",
    address: "",
    mno: "",
  });
  const formInfo = (e) => {
    if (e.target.name === "fname") {
      setValue((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      if (/[^a-zA-Z]/.test(value.fname)) {
        setError({ fname: "Only Alphabates" });
      } else {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
        setError({ fname: "" });
      }
    }

    if (e.target.name === "lname") {
      setValue((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      if (/[^a-zA-Z]/.test(value.lname)) {
        setError({ lname: "Only Alphabates" });
      } else {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
        setError({ lname: "" });
      }
    }
    if (e.target.name === "email") {
      setValue((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value.email)) {
        setError({ email: "invalid email" });
      } else {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
        setError({ email: "" });
      }
    }
    if (e.target.name === "gender") {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
    if (e.target.name === "address") {
      setValue((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
    if (e.target.name === "mno") {
      setValue((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      if (!/[^a-zA-Z]/.test(value.mno) || value.mno.length !== 9) {
        setError({ mno: "Mobile Number must in 10 digits" });
      } else {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
        setError({ mno: "" });
      }
    }
    console.log(inputs);
  };

  const submitData = (e) => {
    e.preventDefault();
    if (
      inputs.fname !== "" &&
      inputs.lname !== "" &&
      inputs.email !== "" &&
      inputs.gender !== "" &&
      inputs.address !== "" &&
      inputs.mno !== ""
    ) {
      filterData(inputs);
    }
  };
  console.log(inputs);
  return (
    <div className="outerdiv">
      <form action="" className="form-class">
        <h2>Registration Form</h2>
        <div className="innerdiv">
          <label htmlFor="">First-Name</label>
          <span>{error.fname}</span>
          <div className="inputdiv">
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              className="inputtag"
              onChange={formInfo}
              required
              value={value.fname}
            />
          </div>
        </div>
        <div className="innerdiv">
          <label htmlFor="">Last-Name</label>
          <span>{error.lname}</span>
          <div className="inputdiv">
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              className="inputtag"
              onChange={formInfo}
              required
              value={value.lname}
            />
          </div>
        </div>
        <div className="innerdiv">
          <label htmlFor="">E-mail</label>
          <span>{error.email}</span>
          <div className="inputdiv">
            <input
              type="email"
              name="email"
              placeholder="Enter E-mail"
              className="inputtag"
              onChange={formInfo}
              value={value.email}
              required
            />
          </div>
        </div>
        <div className="innerdiv">
          <label htmlFor="">Gender</label>
          <div className="gender">
            <label htmlFor="">Male</label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={formInfo}
              checked={inputs.gender === "Male"}
            />
            <label htmlFor="">Female</label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={formInfo}
              checked={inputs.gender === "Female"}
            />
          </div>
        </div>
        <div className="innerdiv">
          <label htmlFor="">Address</label>
          <span>{error.address}</span>
          <textarea
            name="address"
            cols="30"
            rows="3"
            className="inputtag"
            value={value.address}
            onChange={formInfo}
            required
            placeholder="Enter Address"
          ></textarea>
        </div>
        <div className="innerdiv">
          <label htmlFor="">Mobile Number</label>
          <span>{error.mno}</span>
          <div className="inputdiv">
            <input
              type="text"
              name="mno"
              placeholder="Enter Mobile Number"
              className="inputtag"
              value={value.mno}
              onChange={formInfo}
            />
          </div>
        </div>
        <div className="innerdiv">
          <input
            type="submit"
            name="mno"
            value="Submit"
            className="form-submit"
            onClick={submitData}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
