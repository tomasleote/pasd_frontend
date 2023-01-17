import React from 'react';
import {Layout, Typography} from "antd";

const {Header, Content, Footer} = Layout;
const {Title} = Typography;

function Contact() {
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
                marginLeft: 25,
                textAlign: "center"
            }}>
            Contact Us
          </Title>
    </Header>

    <Content level={2}
            style={{ 
                color: "black",
                lineHeight: "inherit",
                marginTop: 15,
                marginBottom: 0,
                display: "inline",
                marginLeft: 25,
                textAlign: "center",
                height: "100vh"
            }}>

      <div className="site-layout-content">
        <p>Phone: 0645121728</p>
        <p>Email: disruptivedelivery@helpdesk.com </p>
      </div>
    </Content>

    <Footer style={{textAlign: "center", backgroundColor: "#001529", color: "white"}}>
      Disruptive Delivery ©2023 Created by Team 36
    </Footer>
    </Layout>
        
  );
}

export default Contact;