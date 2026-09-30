'use client';

import React from 'react';
import { Card, Form, Input, Button, Typography, Space } from 'antd';
import { useTranslations } from 'next-intl';
import { Link, useRouter } from '@/i18n/navigation';

const { Title, Text } = Typography;

export default function RegisterPage() {
  const tAuth = useTranslations('auth.register');
  const router = useRouter();

  const handleFinish = (values: unknown) => {
    console.log('Register form submitted:', values);
    router.push('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-140px)] py-4">
      <Card className="w-full max-w-md shadow-md sm:shadow-lg border-gray-100 rounded-xl">
        <div className="text-center mb-6">
          <Title level={3} className="!text-xl sm:!text-2xl !mb-1">
            {tAuth('title')}
          </Title>
          <Text type="secondary" className="text-xs sm:text-sm">
            Lengkapi formulir untuk membuat akun baru
          </Text>
        </div>

        <Form layout="vertical" onFinish={handleFinish} requiredMark="optional">
          <Form.Item
            label={tAuth('name')}
            name="name"
            rules={[{ required: true, message: 'Harap masukkan nama lengkap' }]}
          >
            <Input size="large" placeholder="Nama Lengkap" className="h-11 sm:h-10 text-base" />
          </Form.Item>

          <Form.Item
            label={tAuth('email')}
            name="email"
            rules={[
              { required: true, message: 'Harap masukkan email' },
              { type: 'email', message: 'Format email tidak valid' },
            ]}
          >
            <Input size="large" placeholder="name@example.com" className="h-11 sm:h-10 text-base" />
          </Form.Item>

          <Form.Item
            label={tAuth('password')}
            name="password"
            rules={[{ required: true, message: 'Harap masukkan kata sandi' }]}
          >
            <Input.Password size="large" placeholder="••••••••" className="h-11 sm:h-10 text-base" />
          </Form.Item>

          <Form.Item className="mt-6">
            <Button type="primary" htmlType="submit" size="large" block className="h-11 sm:h-10 text-base font-medium">
              {tAuth('submit')}
            </Button>
          </Form.Item>

          <div className="text-center text-xs sm:text-sm text-gray-500 pt-2">
            <Space size="small" wrap className="justify-center">
              <span>{tAuth('hasAccount')}</span>
              <Link href="/login" className="text-blue-600 hover:underline font-medium">
                {tAuth('loginLink')}
              </Link>
            </Space>
          </div>
        </Form>
      </Card>
    </div>
  );
}
