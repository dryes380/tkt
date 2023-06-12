import {
  DashboardOutlined,
  QuestionCircleOutlined,
  BellOutlined,
} from "@ant-design/icons";
import Business from "../Business/index";
import { Menu } from "antd";

const Dashboard = () => {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem("Dashboard", "sub1", <DashboardOutlined />),
    getItem("LOREM IPSUM", "sub2", <BellOutlined />),
    getItem("LOREM IPSUM", "sub4", <QuestionCircleOutlined />),
  ];
  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
          height: 700,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
      <div style={{ position: "absolute", left: 300, bottom: 230 }}>
        <Business />
      </div>
    </>
  );
};

export default Dashboard;
