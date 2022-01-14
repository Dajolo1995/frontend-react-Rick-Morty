import React from "react";
import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const { Header, Content, Sider } = Layout;

function LayoutApp({ children }) {
  let navigate = useNavigate();
  let location = useLocation();
  console.log(location);
  return (
    <Layout style={{ minHeight: "100vh", width: "100%" }}>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
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
