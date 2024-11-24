import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Nav = () => {
  const [clicked, setClicked] = useState(false);

console.log(clicked);

    const handleClick = () => {
        setClicked(!clicked); // Toggle the clicked state
    };
  return (
    <nav>
      <div style={{display: "flex", gap: "20px", alignItems: "center"}}>
      <div className="nav-mobile" onClick={handleClick}>
                    {clicked ? <Icon width="50px" height="50px" icon="prime:times" style={{color: "black"}} /> : <Icon width="50px" height="50px" icon="mdi-light:menu" style={{color: "black"}}/>}
                </div>
      <div className="navLogo">
      
        <img className="navImg" src="./images/TestLogo.png" />
      </div>
    </div>
      <div  className={`${clicked ? "navDiv" : "navDiv-2"} normal`}>
        <div className="navbar">
          <Icon
            icon="material-symbols:home-outline"
            width="23"
            height="17"
            style={{ color: "black" }}
          />
          Overview
        </div>
        <div className="navbarActive">
          <Icon
            icon="ic:outline-people-alt"
            width="23"
            height="17"
            style={{ color: "black" }}
          />
          Patient
        </div>
        <div className="navbar">
          <Icon
            icon="uit:calender"
            width="23"
            height="17"
            style={{ color: "black" }}
          />
          Schedule
        </div>
        <div className="navbar">
          <Icon
            icon="mdi:message-outline"
            width="23"
            height="17"
            style={{ color: "black" }}
          />
          Message
        </div>
        <div className="navbar">
          <Icon
            icon="lucide:credit-card"
            width="23"
            height="17"
            style={{ color: "black" }}
          />
          Transactions
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
          }}
        >
          <img
            style={{
              width: "100%",
              height: " 100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
            src="./images/senior_woman.png"
          />
        </div>
        <div className="nav-hide" style={{ fontSize: "14px" }}>
          <p style={{ margin: "0", fontWeight: "bold" }}>Dr. Jose Simmons</p>
          <p style={{ margin: "0" }}>General Practitioner</p>
        </div>
        <div 
          style={{
            display: "flex",
            alignItems: "center",
            borderLeft: "1px solid #F6F7F8",
            height: "35px",
            paddingLeft: "5px",
          }}
        >
          <Icon 
            icon="material-symbols:settings-outline"
            width="19"
            height="20"
            style={{ color: "black" }}
          />
          <Icon
            icon="mage:dots"
            width="19"
            height="20"
            style={{ color: "black" }}
          />
        </div>
      </div>
     
    </nav>
  );
};
export default Nav;
