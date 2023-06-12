import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const Result = () => {
  const [dataGraph, setDataGraph] = useState([]);
  const API_URL = "https://test.wertkt.com/api/result/";

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setDataGraph(response.data);
    });
  }, []);
  const dataSliced = dataGraph.slice(0, 20);
  if (!dataSliced) return null;
  console.log("test", dataSliced.ca);
  const companyCA = dataSliced.map((data) => data.ca);
  const companyYear = dataSliced.map((data) => data.year);
  const dataResult = {
    labels: companyYear,
    datasets: [
      {
        label: "CA",
        data: companyCA,
      },
    ],
  };
  return (
    <>
      {" "}
      <Bar data={dataResult} />
    </>
  );
};

export default Result;
