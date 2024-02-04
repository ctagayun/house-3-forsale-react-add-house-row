/* eslint-disable react/prop-types */ 
//import React, { useState } from "react";
import * as React from 'react';
import HouseRow from './houserow';

const HouseList = (props) => {
 const rowId = 0;
 const [houseState, setAddHouse] = React.useState(props.list); //set state to the "list" passed from app.jsx
 
 /*To console log an object, you can use console.log()
    1. Put the object inside the parenthesis. This will display the 
    2. Use Object.values(person);
    3. Use JSON.stringify(person)
        myString = JSON.stringify(person);
  */
 const myHouseState = JSON.stringify(houseState);
 console.log("Initial statehouseState = " + myHouseState);

 /*
  Define a callback handler for the onclick event of the 
  "Add" button. Whenever the user clicks the "Add" button,
  the updater setAddHouse fires and updates the stateful 
  value "houseState" with a new record
*/
 const addHouse = () => {
    
   setAddHouse([
      ...houseState, //this is the state. It gets updated
                     //by the updater function - "setAddHouse"
      {
        id: 4,
        address: "32 Valley Way, New York",
        country: "USA",
        price: 1000000,
      },
    ]);
    rowId = (rowId + 1);
    console.log("houseState = " + houseState);
  };

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((record) => (
            //Instantiate the HouseRow component and pass each record
            //to HouseRow component as props.
            //house={record} means access of the "record"  and 
            //assign it to variable "house"
            <HouseRow key={record.id} house={record} />
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse} >
        Add House
      </button>
    </>
  );
};

export default HouseList;
