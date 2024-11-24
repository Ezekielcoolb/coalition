import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashbordRap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .chartDiv {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  .chartDiv h3 {
    font-size: 18px;
  }
  .chart {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .chart p {
    font-size: 14px;
  }

  .sysDia-2 {
    display: flex;
    align-items: center;
    gap: 3px;
  }
  .sysDia-2 p {
    font-size: 14px;
  }
  .sysDia-3 {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #e66fd2;
  }
  .sysDia-4 {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .sysDia-4 p {
    font-size: 14px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    height: 300px;
    fontsize: 14px;
  }
  thead tr {
    backgroundcolor: #f0f0f0;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    over-flow: hidden;
  }
  thead th {
    padding: 15px;
    text-align: left;
    feont-weight: bold;
  }
  @media (max-width: 1090px) {
    max-width: 100vw;
  }
`;

const Dashboard = () => {
  const [diagnosis, setDiagnosis] = useState(null);
  const [error, setError] = useState(null);
  const [diagnostic, setDiagnostic] = useState(null);

  const data = {
    labels: [
      "Oct, 2023",
      "Nov, 2023",
      "Dec, 2023",
      "Jan, 2024",
      "Feb, 2024",
      "Mar, 2024",
    ],
    datasets: [
      {
        label: "Dataset 1",

        data:
          diagnosis && diagnosis.length >= 6
            ? [
                diagnosis[5].blood_pressure.systolic.value,
                diagnosis[4].blood_pressure.systolic.value,
                diagnosis[3].blood_pressure.systolic.value,
                diagnosis[2].blood_pressure.systolic.value,
                diagnosis[1].blood_pressure.systolic.value,
                diagnosis[0].blood_pressure.systolic.value,
              ]
            : [],
        borderColor: "#C26EB4",
        backgroundColor: "#C26EB4",
        tension: 0.4,
        pointStyle: "circle",
        pointRadius: 5,
        pointBackgroundColor: "#E66FD2",
      },
      {
        label: "Dataset 2",
        data:
          diagnosis && diagnosis.length >= 6
            ? [
                diagnosis[5].blood_pressure.diastolic.value,
                diagnosis[4].blood_pressure.diastolic.value,
                diagnosis[3].blood_pressure.diastolic.value,
                diagnosis[2].blood_pressure.diastolic.value,
                diagnosis[1].blood_pressure.diastolic.value,
                diagnosis[0].blood_pressure.diastolic.value,
              ]
            : [],
        borderColor: "#7E6CAB",
        backgroundColor: "#7E6CAB",
        tension: 0.4,
        pointStyle: "circle",
        pointRadius: 5,
        pointBackgroundColor: "#8C6FE6",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 200,
        grid: {
          color: "rgba(200, 200, 200, 0.1)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

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

        setDiagnosis(result[3].diagnosis_history);
        setDiagnostic(result[3].diagnostic_list);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  console.log(diagnosis, diagnostic);
  return (
    <DashbordRap>
      <div>
        <div>
          {diagnosis ? (
            <div className="history1">
              <h2>Diagonal History</h2>
              <div className="bloodPressure">
                <div className="lineChart" style={{ flex: 2, width: "70%" }}>
                  <div className="chartDiv">
                    <h3>Blood Pressure</h3>
                    <div className="chart">
                      <p>Last 6 months</p>
                      <Icon
                        icon="fe:arrow-down"
                        width="10"
                        height="10"
                        style={{ color: "black" }}
                      />
                    </div>
                  </div>
                  <Line data={data} options={options} />
                </div>
                <div
                  className="systolic"
                  style={{ flex: 1, display: "flex", flexDirection: "column" }}
                >
                  <div className="sysDia sysDia-Div">
                    <div className="sysDia-2">
                      <div className="sysDia-3"></div>
                      <p>Systolic</p>
                    </div>
                    <p>{diagnosis[0]?.blood_pressure?.systolic?.value}</p>
                    <div className="sysDia-4">
                      {diagnosis[0]?.blood_pressure?.systolic?.levels ===
                      "Higher than Average" ? (
                        <Icon
                          icon="bxs:up-arrow"
                          width="10"
                          height="10"
                          style={{ color: "black" }}
                        />
                      ) : (
                        <Icon
                          icon="bxs:down-arrow"
                          width="10"
                          height="10"
                          style={{ color: "black" }}
                        />
                      )}
                      <p>{diagnosis[0]?.blood_pressure?.systolic?.levels}</p>
                    </div>
                  </div>
                  <div className="sysDia">
                    <div className="sysDia-2">
                      <div
                        className="sysDia-3"
                        style={{
                          background: "#8C6FE6",
                        }}
                      ></div>
                      <p>Diastolic</p>
                    </div>
                    <p>{diagnosis[0]?.blood_pressure?.diastolic?.value}</p>
                    <div className="sysDia-4">
                      {diagnosis[0]?.blood_pressure?.diastolic?.levels ===
                      "Higher than Average" ? (
                        <Icon
                          icon="bxs:up-arrow"
                          width="10"
                          height="10"
                          style={{ color: "black" }}
                        />
                      ) : (
                        <Icon
                          icon="bxs:down-arrow"
                          width="10"
                          height="10"
                          style={{ color: "black" }}
                        />
                      )}
                      <p>{diagnosis[0]?.blood_pressure?.diastolic?.levels}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="gridContainer"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  columnGap: "16px",
                }}
              >
                <div className="respire">
                  <div className="respire-1">
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                      src="./images/respiratory_rate.png"
                    />
                  </div>
                  <div>
                    <p className="res-1">Respiratory Rate</p>
                    <p className="res-2">
                      {`${diagnosis[0]?.respiratory_rate?.value} bpm`}
                    </p>
                    <p style={{ marginTop: "20px" }}>
                      {diagnosis[0]?.respiratory_rate?.levels}
                    </p>
                  </div>
                </div>
                <div className="tempHeart">
                  <div className="respire-1">
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                      src="./images/temperature.png"
                    />
                  </div>
                  <div>
                    <p className="res-1">Temperature</p>
                    <p className="res-2">
                      {`${diagnosis[0]?.temperature?.value}°F`}
                    </p>
                    <p style={{ marginTop: "20px" }}>
                      {diagnosis[0]?.temperature?.levels}
                    </p>
                  </div>
                </div>
                <div className="tempHeart">
                  <div className="respire-1">
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                      src="./images/HeartBPM.png"
                    />
                  </div>
                  <div>
                    <p className="res-1">Heart Rate</p>
                    <p className="res-2">
                      {`${diagnosis[0]?.heart_rate?.value} bpm`}
                    </p>
                    <p style={{ marginTop: "20px" }}>
                      {diagnosis[0]?.heart_rate?.levels}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="histor2 history1">
          <h2>Diagonistic List</h2>
          <div>
            <table style={{}}>
              <thead>
                <tr style={{}}>
                  <th
                    style={{
                      borderTopLeftRadius: "30px",
                      borderBottomLeftRadius: "30px",
                    }}
                  >
                    Problem/Diagnosis
                  </th>
                  <th style={{}}>Description</th>
                  <th
                    style={{
                      borderTopRightRadius: "30px",
                      borderBottomRightRadius: "30px",
                      marginRight: "40px",
                    }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {diagnostic && diagnostic.length > 0
                  ? diagnostic.map((item, index) => (
                      <tr key={index}>
                        <td className="diagnotic">{item.name}</td>
                        <td className="diagnotic">{item.description}</td>
                        <td className="diagnotic">{item.status}</td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashbordRap>
  );
};

export default Dashboard;
