import React from "react";
import Dashboard from "./Components/Dashboard/index";
import Result from "./Components/Result/index";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import "./App.css";

const App = () => {
  return (
    <>
      <div>
        <img
          src="https://files.taleez.com/files/1474/pics/2019/7/8/M2Y2ZTk0OGQtYTk3Yy00YmNkLWI3NmUtMGMyNDkyMDY5NTBj.png"
          alt=""
          style={{
            width: 60,
            height: 34,
            marginLeft: 22,
            marginBottom: 25,
            marginTop: 32,
          }}
        ></img>
      </div>
      <Dashboard />
      <Result />
      <div style={{ position: "absolute", display: "flex", bottom: 4 }}>
        <Avatar size={55} icon={<UserOutlined />} />
        <div style={{ display: "block", position: "relative", left: 20 }}>
          <p>Sophie L.</p>
          <p>sophie.l@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default App;
