'use client';

import React, { useState } from 'react';
import { Layout, Button, Typography, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const tNav = useTranslations('nav');
  const tCommon = useTranslations('common');
  const pathname = usePathname();

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <Layout className="min-h-screen flex flex-col bg-slate-50">
      {/* Header Responsive */}
      <Header className="bg-white border-b border-gray-200 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-50 shadow-xs h-14 sm:h-16">
        <div className="flex items-center space-x-4 sm:space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <Title level={4} style={{ margin: 0, color: '#1677ff' }} className="!text-lg sm:!text-xl">
              {tCommon('appName')}
            </Title>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                pathname === '/' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {tNav('home')}
            </Link>
            <Link
              href="/dashboard"
              className={`font-medium transition-colors ${
                pathname === '/dashboard' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {tNav('dashboard')}
            </Link>
          </nav>
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center space-x-3">
          <LanguageSwitcher />
          <Link href="/login">
            <Button>{tNav('login')}</Button>
          </Link>
          <Link href="/register">
            <Button type="primary">{tNav('register')}</Button>
          </Link>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex md:hidden items-center space-x-2">
          <LanguageSwitcher />
          <Button
            type="text"
            icon={<MenuOutlined className="text-lg" />}
            onClick={() => setDrawerOpen(true)}
            aria-label="Menu"
          />
        </div>
      </Header>

      {/* Mobile Drawer Navigation */}
      <Drawer
        title={tCommon('appName')}
        placement="right"
        onClose={closeDrawer}
        open={drawerOpen}
        styles={{ body: { padding: '16px' } }}
        size={280}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={closeDrawer}
                className={`p-3 rounded-lg font-medium text-base ${
                  pathname === '/' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tNav('home')}
              </Link>
              <Link
                href="/dashboard"
                onClick={closeDrawer}
                className={`p-3 rounded-lg font-medium text-base ${
                  pathname === '/dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tNav('dashboard')}
              </Link>
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-gray-100">
            <Link href="/login" onClick={closeDrawer} className="block w-full">
              <Button size="large" block>
                {tNav('login')}
              </Button>
            </Link>
            <Link href="/register" onClick={closeDrawer} className="block w-full">
              <Button type="primary" size="large" block>
                {tNav('register')}
              </Button>
            </Link>
          </div>
        </div>
      </Drawer>

      {/* Main Content */}
      <Content className="flex-1 w-full max-w-7xl mx-auto p-3 sm:p-6">
        {children}
      </Content>

      {/* Footer */}
      <Footer className="text-center bg-white border-t border-gray-200 text-gray-500 py-4 text-xs sm:text-sm">
        {tCommon('appName')} &copy; {new Date().getFullYear()} - All rights reserved.
      </Footer>
    </Layout>
  );
}
