import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [room, updatedRoom] = useState(1);
  const [audult, updatedAudult] = useState(1);
  const [children, updatedChildren] = useState(0);

  const incDesRooms = (button) => {
    if(button == "minus" && (audult+children) >= room*4) return;
    switch (button) {
      case "minus":
        if(room <=1) return;
        let localRoomminus = room - 1;
        updatedRoom(localRoomminus);
        break;
      case "plus":
        if(room >=5) return;
        let localRoomplus = room + 1;
        updatedRoom(localRoomplus);
        break;
    }
  }

  const incDesAdultChild = (button, type) => {
    if(button == "plus" && room*4 <= (audult+children)) return;
    switch (button) {
      case "minus":
        if(type == "audult"){
          if(audult <= 1) return;
          let adultminus = audult -1;
          updatedAudult(adultminus);
        } else{
          if(children <= 0) return;
          let childminus = children - 1;
          updatedChildren(childminus);
        }
        break;
      case "plus":
        if(type == "audult"){
          let adultplus = audult +1;
          updatedAudult(adultplus);
        } else{
          let childPlus = children + 1;
          updatedChildren(childPlus);
        }
        break;
    }
  }

  return (
    <div className="Wrapper">
      <h1>Choose number of people</h1>
      <div className="room-wrapper">
        <div className="rooms space">
          <span className="room-space">ROOMS</span>
          <button className="minus" onClick={() =>incDesRooms("minus")}>-</button>
          {room}
          <button className="plus" onClick={() =>incDesRooms("plus")}>+</button>
        </div>
        <div className="audults space">
          <span className="room-space">AUDULTS</span>
          <button className="minus" onClick={() =>incDesAdultChild("minus", "audult")}>-</button>
          {audult}
          <button className="plus" onClick={() =>incDesAdultChild("plus", "audult")}>+</button>
        </div>
        <div className="children">
          <span className="room-space">CHILDREN</span>
          <button className="minus" onClick={() =>incDesAdultChild("minus", "child")}>-</button>
          {children}
          <button className="plus" onClick={() =>incDesAdultChild("plus", "child")}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
