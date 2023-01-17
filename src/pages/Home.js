import React from 'react';
import {Layout, Table, Typography} from "antd";
import SearchBar from "../components/SearchBar/searchBar";

const {Header, Content, Footer} = Layout;
const {Title} = Typography;

function Home() {
  return (
    <Layout style={{minheight: "100vh"}}>
    <Header>
        <Title
            level={2}
            style={{ 
                color: "white",
                lineHeight: "inherit",
                marginBottom: 0,
                display: "inline",
                marginLeft: 1,
                height: "100vh"
            }}>
             Home of Deliveries
        </Title>
    </Header>

    <Content level={2}
            style={{
                color: "black", 
                lineHeight: "inherit",
                textAlign : "center",
                marginTop: 15,
                marginBottom: 0,
                display: "inline",
                height: "100vh"
            }}>
      <div className="site-layout-content">
        <p>Disruptive Delivery is a delivery service that aims to disrupt the current delivery market by providing a more efficient and cost effective service. </p>
        <p>Our service is currently only available in Groningen, but we are looking to expand to other provinces in the near future.</p>
      </div>

      <div className="site-layout-content">
        <SearchBar>
          on
        </SearchBar>
         
      </div>
      </Content>
  
    <Footer style={{textAlign: "center", backgroundColor: "#001529", color: "white"}}>
        Disruptive Delivery ©2023 Created by Team 36
    </Footer>
    </Layout>
  );
}

export default Home;	 