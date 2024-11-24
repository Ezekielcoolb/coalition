import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const RightRap = styled.div`
 
  max-width: 367px;
  .right-img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  @media (max-width: 1090px) {
  max-width: 100vw;
  width: 100vw;
  

  .labResults {
  max-width: 98vw;
 padding: 20px 30px
  }
  }
  .
`;

const RightSide = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  console.log(result);

  useEffect(() => {
    const username = "coalition"; 
    const password = "skills-test"; 
    const auth = btoa(`${username}:${password}`);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            method: "GET", 
            headers: {
              Authorization: `Basic ${auth}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network Error");
        }
        const result = await response.json();

        setResult(result[3]);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);
  return (
    <RightRap>
      <div className="allRightSide">
        {result ? (
          <div className="rightSidebar">
            <div className="rightbar">
              <div className="right-img">
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                  src={result.profile_picture}
                />
              </div>
              <h3>{result.name}</h3>
            </div>
            <div className="rightInfo">
              <div className="rightSide">
                <div className="rightDiv">
                  <Icon
                    icon="uit:calender"
                    width="22"
                    height="22"
                    style={{ color: "black" }}
                  />
                </div>
                <div>
                  <p style={{ margin: "0" }}>Date Of Birth</p>
                  <p style={{ margin: "0", fontWeight: "bold" }}>
                    {result.date_of_birth}
                  </p>
                </div>
              </div>
              <div className="rightSide">
                <div className="rightDiv">
                  <Icon
                    icon="ic:baseline-female"
                    width="22"
                    height="22"
                    style={{ color: "black" }}
                  />
                </div>
                <div>
                  <p style={{ margin: "0" }}>Gender</p>
                  <p style={{ margin: "0", fontWeight: "bold" }}>
                    {result.gender}
                  </p>
                </div>
              </div>
              <div className="rightSide">
                <div className="rightDiv">
                  <Icon
                    icon="ic:baseline-call"
                    width="22"
                    height="22"
                    style={{ color: "black" }}
                  />
                </div>
                <div>
                  <p style={{ margin: "0" }}>Contract Info</p>
                  <p style={{ margin: "0", fontWeight: "bold" }}>
                    {result.phone_number}
                  </p>
                </div>
              </div>
              <div className="rightSide">
                <div className="rightDiv">
                  <Icon
                    icon="ic:baseline-call"
                    width="22"
                    height="22"
                    style={{ color: "black" }}
                  />
                </div>
                <div>
                  <p style={{ margin: "0" }}>Emergency Contacts</p>
                  <p style={{ margin: "0", fontWeight: "bold" }}>
                    {result.emergency_contact}
                  </p>
                </div>
              </div>
              <div className="rightSide">
                <div className="rightDiv">
                  <Icon
                    icon="mdi:marker-check"
                    width="22"
                    height="22"
                    style={{ color: "black" }}
                  />
                </div>
                <div>
                  <p style={{ margin: "0" }}>Insurance Provider</p>
                  <p style={{ margin: "0", fontWeight: "bold" }}>
                    {result.insurance_type}
                  </p>
                </div>
              </div>
            </div>
            <button className="leftSideBtn">Show All Information</button>
            <p style={{ color: "transparent" }}>
              dfghjkdfv cd gdch ccuh uhcdyyryrtyhsdfgd
            </p>
          </div>
        ) : (
          ""
        )}

        <div
          className="labResults"
          style={{
            maxHeight: "300px", 
            overflowY: "auto", 
            paddingRight: "10px", 
          }}
        >
          <h2>Lab Result</h2>
          <div>
            <p>Blood Tests</p>
            <Icon
              icon="material-symbols:download"
              width="20"
              height="20"
              style={{ color: "black" }}
            />
          </div>
          <div>
            <p>CT Scans</p>
            <Icon
              icon="material-symbols:download"
              width="20"
              height="20"
              style={{ color: "black" }}
            />
          </div>
          <div>
            <p>Radiology Reports</p>
            <Icon
              icon="material-symbols:download"
              width="20"
              height="20"
              style={{ color: "black" }}
            />
          </div>
          <div>
            <p>X-Rays</p>
            <Icon
              icon="material-symbols:download"
              width="20"
              height="20"
              style={{ color: "black" }}
            />
          </div>
          <div>
            <p>Urine Test</p>
            <Icon
              icon="material-symbols:download"
              width="20"
              height="20"
              style={{ color: "black" }}
            />
          </div>
        </div>
      </div>
    </RightRap>
  );
};
export default RightSide;
