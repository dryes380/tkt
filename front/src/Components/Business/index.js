import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tag } from "antd";

const Business = () => {
  const [data, setData] = useState("");
  const API = "https://test.wertkt.com/api/biz/";
  const [sortActive, setActive] = useState(false);
  const toggleSortHandler = () => setActive((a) => !a);

  useEffect(() => {
    axios.get(API).then((response) => {
      setData(response.data);
    });
  }, []);
  useEffect(() => {
    if (sortActive) {
      setData(
        [...dataSliced].sort((a, b) => {
          if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
          if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
        })
      );
    } else {
      [...dataSliced].sort((a, b) => {
        if (a.name.toUpperCase() > b.name.toUpperCase()) return -1;
        if (a.name.toUpperCase() < b.name.toUpperCase()) return 1;
      });
    }
  }, [sortActive]);
  const dataSliced = data.slice(0, 20);
  if (!dataSliced) return null;

  const setServices = [
    ...dataSliced.filter((services) => services.sector === "Services"),
  ];
  const setElectronic = [
    ...dataSliced.filter((electronic) => electronic.sector === "Electronic"),
  ];
  const setAll = [...dataSliced.filter((all) => all.sector)];

  return (
    <>
      <Tag color="green" onClick={() => setData(setAll)}>
        ALL
      </Tag>
      <Tag color="volcano" onClick={() => setData(setServices)}>
        Services
      </Tag>
      <Tag color="gold" onClick={() => setData(setElectronic)}>
        Electronic
      </Tag>
      <tbody>
        <tr>
          <th onClick={() => toggleSortHandler()} style={{ cursor: "pointer" }}>
            COMPANY
          </th>
          <th style={{ cursor: "pointer" }}>N°SIREN</th>
          <th style={{ cursor: "pointer" }}>CATEGORY</th>
        </tr>
        {dataSliced.map((company) => (
          <>
            <tr>
              <th>{company.name.toUpperCase()}</th>
              <th>{company.siren}</th>
              <th>
                <Tag
                  style={{ width: 100, textAlign: "center", left: 100 }}
                  color="geekblue"
                >
                  {company.sector}
                </Tag>
              </th>
            </tr>
          </>
        ))}
      </tbody>
    </>
  );
};

export default Business;
