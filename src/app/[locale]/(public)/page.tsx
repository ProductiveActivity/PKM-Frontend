'use client';

import React from 'react';
import { Typography, Button, Row, Col, Card } from 'antd';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { MapCanvas } from '@/components/MapCanvas';
import { RoutingPanel } from '@/components/RoutingPanel';

const { Title, Paragraph } = Typography;

export default function LandingPage() {
  const tLanding = useTranslations('landing');
  const tNav = useTranslations('nav');

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Hero Section */}
      <section className="text-center py-6 px-4 sm:py-10 sm:px-6 bg-linear-to-b from-blue-50 to-transparent rounded-2xl">
        <Title level={1} className="!text-2xl sm:!text-3xl md:!text-5xl !font-bold text-gray-900 !mb-2 sm:!mb-3">
          {tLanding('hero.title')}
        </Title>
        <Paragraph className="text-sm sm:text-base md:text-xl text-gray-600 max-w-2xl mx-auto !mb-6">
          {tLanding('hero.subtitle')}
        </Paragraph>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none mx-auto">
          <Link href="/register" className="w-full sm:w-auto">
            <Button type="primary" size="large" block className="h-11 sm:h-10 text-base">
              {tLanding('hero.cta')}
            </Button>
          </Link>
          <Link href="/login" className="w-full sm:w-auto">
            <Button size="large" block className="h-11 sm:h-10 text-base">
              {tNav('login')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Map Section */}
      <section className="space-y-3 sm:space-y-4">
        <Title level={3} className="!text-lg sm:!text-2xl text-gray-800 !mb-0">
          Container Peta (Map Canvas)
        </Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={16}>
            <MapCanvas className="h-[300px] sm:h-[420px] lg:h-[500px]" />
          </Col>
          <Col xs={24} lg={8}>
            <div className="space-y-4">
              <RoutingPanel />
              <Card title="Panel Informasi" size="small" className="shadow-xs">
                <Paragraph className="text-gray-600 text-xs sm:text-sm m-0">
                  Placeholder untuk menampilkan informasi, deskripsi modul, atau petunjuk penggunaan.
                </Paragraph>
              </Card>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}
