"use client"

import { usePathname } from 'next/navigation';
import {
    SearchOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Link from "next/link";

const { Sider } = Layout;

export default function Sidebar() {

    const pathname = usePathname();

    return (
        <Sider style={{
            backgroundColor: "white",
            overflow: "auto",
            height: "100vh",
            position: "sticky",
            top: 0,
            left: 0
        }}>
            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={["/home"]}
                selectedKeys={[pathname]}
                items={[
                    {
                        key: "/home",
                        icon: <SearchOutlined />,
                        label: <Link href="/home">Home</Link>,
                    },
                ]}
            />
        </Sider>
    );
};
