import React, { useEffect, useState } from "react";
import styled from "styled-components";

const LeftRap = styled.div`

@media (max-width: 1090px) {
 

  
`;

const LeftSidebar = () => {
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

        setResult(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);
  return (
    <LeftRap>
      <div className="left-pad" style={{ height: "95vh" }}>
        <div
          className="patients"
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <div>
            <h2>Patients</h2>
          </div>
          <div className="patient">
            {result && result.length > 0
              ? result.map((item, index) => (
                  <div
                    className="patient-n"
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingRight: "20px",
                      alignItems: "center",
                      marginTop: "20px",
                      maxWidth: "300px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                        }}
                      >
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top",
                          }}
                          src={item.profile_picture}
                          alt={item.name}
                        />
                      </div>
                      <div>
                        <p
                          style={{
                            margin: "0",
                            fontWeight: "bold",
                            fontSize: "14px",
                          }}
                        >
                          {item.name}
                        </p>
                        <p
                          style={{ margin: "0" }}
                        >{`${item.gender}, ${item.age}`}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: "18px", fontWeight: "bold" }}>...</p>
                  </div>
                ))
              : ""}
          </div>
          <p style={{ color: "transparent" }}>
            ghgjrfernkhbfgrfgbfd ad ugyfreyregyfvddd
          </p>
        </div>
      </div>
    </LeftRap>
  );
};
export default LeftSidebar;
