import React from "react";
import Nav from "../Components/Nav";
import LeftSidebar from "../Components/LeftSide";
import Dashboard from "../Components/History";
import RightSide from "../Components/RightSide";

const General = () => {
    return(
        <div style={{width: "fit-content", margin: "auto"}}>
            <Nav />
            <div className="generalDiv" style={{
                display: "flex",
                gap: "20px",
                width: "fit-content",
               
            }}>
                <LeftSidebar  />
                <Dashboard />
                <RightSide />
            </div>
        </div>
    )
}
export default General