'use client';

import React from 'react';
import { Card, Input, Button, Space } from 'antd';
import { useTranslations } from 'next-intl';

export const RoutingPanel: React.FC = () => {
  const t = useTranslations('common');

  return (
    <Card
      title={<span className="text-sm sm:text-base font-semibold">Pencarian Rute</span>}
      size="small"
      className="shadow-xs w-full rounded-xl"
    >
      <Space orientation="vertical" className="w-full" size="middle">
        <Input placeholder="Titik Awal (Origin)" size="large" className="text-sm" />
        <Input placeholder="Titik Tujuan (Destination)" size="large" className="text-sm" />
        <Button type="primary" size="large" block className="h-10 sm:h-9 font-medium">
          {t('search')}
        </Button>
      </Space>
    </Card>
  );
};
