import React from 'react';
import { useState, useEffect } from 'react';
import {Layout, Typography} from "antd";
import axios from 'axios';
import Table from '../components/Table/table';
import "./style.css";

const {Header, Content, Footer} = Layout;
const {Title} = Typography;


function Orders() {
  const [showContent, setShowContent] = useState(false);

  return (
    <Layout style={{height: "100vh"}}>
    <Header>
        <Title
            level={2}
            style={{ 
                color: "white",
                lineHeight: "inherit",
                marginBottom: 0,
                display: "inline",
                marginLeft: 1,
                textAlign: "center"
            }}>
            Order
          </Title>
    </Header>

    <Content level={2}
            style={{
                color: "black", 
                lineHeight: "inherit",
                marginTop: 15,
                marginBottom: 0,
                display: "inline",
                height: "100vh"
            }}>  
      <div>
      <div className='login'>
      Username: <input type="text" name="username" /> 
      Password: <input type="text" name="password" />  
      <button className="button" onClick={() => setShowContent(!showContent)}>{showContent ? 'Logout' : 'Login'}</button>
        {showContent && (
          <div>
            <Table />
          </div>
        )} 
      </div>  
      </div>
    </Content>

    
  
    <Footer style={{textAlign: "center", backgroundColor: "#001529", color: "white"}}>
      Disruptive Delivery ©2023 Created by Team 36
    </Footer>
    </Layout>
  );
}

export default Orders;