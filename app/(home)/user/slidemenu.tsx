import React, {useEffect, useState} from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Avatar, Button, Menu} from 'antd';
import {FaClipboard, FaKey, FaCreditCard, FaTicket, FaUser, FaPencil} from 'react-icons/fa6';
import Link from 'next/link';
import {useSession} from "next-auth/react";
import {customerAPI} from "@/util/API/Customer";
import Image from "next/image";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    href?: string,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label: (
            <Link href={href || ''} key={key}>
                {label}
            </Link>
        ),
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Tài khoản của tôi', 'sub1', <FaUser/>, '', [
        getItem('Hồ sơ', '1', <FaClipboard/>, '/user/account/profile'),
        getItem('Ngân hàng', '2', <FaCreditCard/>, ''),
        getItem('Đổi mật khẩu', '3', <FaKey/>, '/user/account/password'),
    ]),

    getItem('Vé đã mua', '4', <FaTicket/>, '/user/booked-ticket'),
];

const SlideMenu = () => {
    const [collapsed, setCollapsed] = useState(false);
    // const [customerName, setCustomerName] = useState<string>();
    const [customer, setCustomer] = useState<customer>();
    const [avatar, setAvatar] = useState<string>();
    const { data: session } = useSession();

    const customerId = Number(session?.user.id);

    useEffect(() => {
        if (customerId) {
            const init = async () => {
                await customerAPI.findId(customerId).then((response) => {
                    setCustomer(response);
                    setAvatar(response?.avatar)
                })
            }

            init();
        }
    }, [customerId]);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
            <div
                id="sidebar-multi-level-sidebar"
                className={"left-0"}
            >
                <Button
                    type="link"
                    onClick={toggleCollapsed}
                    style={{marginBottom: 16}}
                    className="text-white">
                    {/* {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} */}
                    <div className='grid grid-rows-2 grid-flow-col gap-x-4 text-white px-2'>
                        <section className='row-span-2 my-auto'>
                            <Avatar
                                src={<Image
                                    src=
                                        {
                                            avatar ? `https://zuhot-cinema-images.s3.amazonaws.com/avatar-user/${avatar}`
                                                : "https://zuhot-cinema-images.s3.amazonaws.com/avatar-user/default.png"
                                        }
                                    alt="avatar" width={200} height={200}/>}
                                className='hover:scale-110'
                            />
                        </section>

                        <section className='col-span-2 hover:text-red-400'>{customer?.name}</section>

                        <section className='col-span-2 hover:text-red-400'>
                            <Link
                                href="/user/account/profile"
                                className="row-span-1 col-span-2 flex items-center hover:text-gray-600 text-gray-600"
                            >
                                <FaPencil/> <span className="ms-2 hover:text-red-400">chỉnh sửa</span>
                            </Link>
                        </section>
                    </div>
                </Button>

                <Menu
                    // defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                    items={items}
                    rootClassName='bg-inherit'
                />
            </div>
        </>
    );
}

export default SlideMenu;