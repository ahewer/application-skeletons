"use client"

import {Layout, Row, Col} from "antd";
import Sidebar from "@/app/components/sidebar/sidebar";
import React from "react";
import {Header} from "antd/es/layout/layout";

const {Content} = Layout;
export default function Dashboard({ children }: { children: React.ReactNode }) {

    const headerStyle: React.CSSProperties = {
        textAlign: 'left',
        color: "black",
        height: 48,
        paddingInline: 0,
        lineHeight: '50px',
        backgroundColor: "white",
        borderBottom: "1px solid rgb(216, 216, 222)",
    };

    const layoutStyle = {
        borderRadius: 8,
        overflow: 'hidden',
    };

    const contentStyle = {
        borderRadius: 8,
        overflow: 'hidden',
    };

    const siderStyle = {
        overflow: 'hidden',
    };

    return (

      <Layout style={layoutStyle}>
          <Layout style={{backgroundColor: "white"}}>

         <Header style={headerStyle}>
             <Content>
                 <Row gutter={[32, 32]}>
                     <Col span={18} style={{lineHeight: "50px", textAlign: "center", fontSize: "115%"}}>
                         Example
                     </Col>
                 </Row>
             </Content>
         </Header>
          </Layout>
          <Layout style={siderStyle} hasSider>
              <Sidebar/>
              <Content style={contentStyle}>
                  {children}
              </Content>
          </Layout>
      </Layout>
    );
};
