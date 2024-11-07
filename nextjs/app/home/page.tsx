"use client"

import {
  Col,
  Layout,
  Row
} from "antd";
import React, {useEffect, useState} from "react";
import {Content} from "antd/es/layout/layout";
import {Configuration, HealthApi} from "@/app/api";

import {getApiConfiguration} from "@/app/actions/env-access";
export default function Search() {

  const [api, setApi] = useState<HealthApi>(null);
  const [apiAvailable, setApiAvailable] = useState<boolean>(false);

  useEffect(() => {
    getApiConfiguration().then((result)=> {
      let apiConfiguration = new Configuration({
        basePath: result.apiUrl
      });
      setApi(new HealthApi(apiConfiguration))
      setApiAvailable(true)
    })
  }, []);

  useEffect(() => {
    // ...
  }, [apiAvailable]);



    return (<Layout style={{ height: "100%", overflowY: "auto" }}>
      <Content style={{ padding: "2em" }}>
        <Row style={{ padding: "2em" }} gutter={[32, 32]}>
    <Col span={24}>
      Example
    </Col>
        </Row>
      </Content>
    </Layout>
    )
};
