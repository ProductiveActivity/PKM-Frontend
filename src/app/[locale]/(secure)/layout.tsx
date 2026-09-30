'use client';

import React, { useState } from 'react';
import { Layout, Menu, Typography, Button, Space, Drawer } from 'antd';
import {
  DashboardOutlined,
  HomeOutlined,
  LogoutOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { useTranslations } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/navigation';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

export default function SecureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const tNav = useTranslations('nav');
  const tCommon = useTranslations('common');
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    router.push('/login');
  };

  const menuItems = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: <Link href="/dashboard">{tNav('dashboard')}</Link>,
    },
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link href="/">{tNav('home')}</Link>,
    },
  ];

  return (
    <Layout className="min-h-screen">
      {/* Desktop Sider (Hidden on Mobile) */}
      <Sider
        breakpoint="md"
        collapsedWidth="64"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="light"
        className="hidden md:block border-r border-gray-200"
      >
        <div className="p-4 flex items-center justify-center border-b border-gray-100 h-16">
          <Title level={5} style={{ margin: 0, color: '#1677ff' }} className="truncate">
            {collapsed ? 'APP' : tCommon('appName')}
          </Title>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[pathname]}
          items={menuItems}
          className="border-r-0 pt-2"
        />
      </Sider>

      {/* Main Layout Area */}
      <Layout>
        {/* Header Responsive */}
        <Header className="bg-white border-b border-gray-200 px-3 sm:px-6 flex items-center justify-between shadow-xs sticky top-0 z-40 h-14 sm:h-16">
          <div className="flex items-center space-x-2">
            <Button
              type="text"
              icon={<MenuOutlined className="text-lg" />}
              onClick={() => setMobileDrawerOpen(true)}
              className="md:hidden"
              aria-label="Menu"
            />
            <Text strong className="text-gray-800 text-sm sm:text-base">
              {tNav('dashboard')}
            </Text>
          </div>

          <Space size="small" className="sm:space-x-2">
            <LanguageSwitcher />
            <Button
              danger
              icon={<LogoutOutlined />}
              onClick={handleLogout}
              className="hidden sm:inline-flex"
            >
              {tNav('logout')}
            </Button>
            <Button
              danger
              type="text"
              icon={<LogoutOutlined className="text-base" />}
              onClick={handleLogout}
              className="sm:hidden"
              aria-label="Logout"
            />
          </Space>
        </Header>

        {/* Content with bottom padding for mobile navigation bar */}
        <Content className="p-3 sm:p-6 bg-slate-50 min-h-[calc(100vh-64px)] pb-20 md:pb-6">
          <div className="max-w-7xl mx-auto">{children}</div>
        </Content>

        {/* Mobile Navigation Drawer */}
        <Drawer
          title={tCommon('appName')}
          placement="left"
          onClose={() => setMobileDrawerOpen(false)}
          open={mobileDrawerOpen}
          width={260}
          styles={{ body: { padding: '12px' } }}
        >
          <Menu
            mode="inline"
            selectedKeys={[pathname]}
            items={menuItems}
            onClick={() => setMobileDrawerOpen(false)}
            className="border-r-0"
          />
          <div className="pt-6 mt-6 border-t border-gray-100">
            <Button
              danger
              block
              icon={<LogoutOutlined />}
              onClick={handleLogout}
              size="large"
            >
              {tNav('logout')}
            </Button>
          </div>
        </Drawer>

        {/* Mobile Bottom Navigation Bar (App-like experience) */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 flex items-center justify-around py-2 px-3 shadow-lg">
          <Link
            href="/dashboard"
            className={`flex flex-col items-center justify-center text-xs font-medium py-1 px-3 rounded-lg ${
              pathname === '/dashboard' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <DashboardOutlined className="text-lg mb-1" />
            <span>{tNav('dashboard')}</span>
          </Link>
          <Link
            href="/"
            className={`flex flex-col items-center justify-center text-xs font-medium py-1 px-3 rounded-lg ${
              pathname === '/' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <HomeOutlined className="text-lg mb-1" />
            <span>{tNav('home')}</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex flex-col items-center justify-center text-xs font-medium py-1 px-3 rounded-lg text-red-500"
          >
            <LogoutOutlined className="text-lg mb-1" />
            <span>{tNav('logout')}</span>
          </button>
        </nav>
      </Layout>
    </Layout>
  );
}
