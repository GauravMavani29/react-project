import React, { useState } from "react";
import Form from "./Form";

function Data() {
  const [datas, setDatas] = useState({});
  const [temp, setTemp] = useState(false);
  const handleData = (e) => {
    setTemp(true);
    setDatas(e);
    console.log(datas);
  };
  console.log(temp);
  if (temp === true) {
    return (
      <div className="maindiv">
        <div className="datadiv">
          <p>First Name: {datas.fname}</p>
          <p>Last Name: {datas.lname}</p>
          <p>E-mail: {datas.email}</p>
          <p>Gender: {datas.gender}</p>
          <p>Address: {datas.address}</p>
          <p>Mobile Number: {datas.mno}</p>
        </div>
      </div>
    );
  }

  return <Form filterData={handleData} />;
}

export default Data;
