import React, { useContext } from "react";
import { Layout, Menu, Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import credentials from "../../services";
import styled from "@emotion/styled";
import AuthContext from "../../context/login/authContext";

const { Header, Content, Sider } = Layout;

const Headers = styled(Header)`
  display: flex;
  justify-content: space-between;
`;

function LayoutApp({ children }) {
  const authContext = useContext(AuthContext);

  const { cerrar } = authContext;

  let navigate = useNavigate();
  let location = useLocation();

  let name = credentials.getUser();

  const onClickClose = () => {
    cerrar();
    navigate("/auth");

  };


  return (
    <Layout style={{ minHeight: "100vh", width: "100%" }}>
      <Headers className="header">
        <div>
          <span style={{ color: "#fff", fontWeight: "bold" }}>{name.name}</span>
        </div>

        <div>
          <Button onClick={onClickClose}>Exit</Button>
        </div>
      </Headers>
      <Layout>
        <Sider
          style={{
            height: "100vh",
            left: 0,
            top: 0,
            bottom: 0,
          }}
          width={200}
          className="site-layout-background"
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item
              className={location.pathname === "/" ? "btn-menus" : "btn-menu"}
              onClick={() => navigate("/")}
              key="1"
            >
              Personajes
            </Menu.Item>
            <Menu.Item
              className={
                location.pathname === "/lugares" ? "btn-menus" : "btn-menu"
              }
              onClick={() => navigate("/lugares")}
              key="2"
            >
              Lugares
            </Menu.Item>
            <Menu.Item
              className={
                location.pathname === "/episodes" ? "btn-menus" : "btn-menu"
              }
              onClick={() => navigate("/episodes")}
              key="3"
            >
              Episodios
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 500,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default LayoutApp;
