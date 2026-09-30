'use client';

import React from 'react';
import { Typography, Row, Col, Card, Statistic, Table, Tag } from 'antd';
import { useTranslations } from 'next-intl';

const { Title, Paragraph } = Typography;

export default function DashboardPage() {
  const tDashboard = useTranslations('dashboard');

  const stats = [
    { title: 'Total Data', value: 120 },
    { title: 'Pengguna Aktif', value: 45 },
    { title: 'Total Item', value: 310 },
    { title: 'Aktivitas Baru', value: 18 },
  ];

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id', width: 90 },
    { title: 'Nama Item', dataIndex: 'name', key: 'name', width: 140 },
    { title: 'Kategori', dataIndex: 'category', key: 'category', width: 110 },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 90,
      render: (status: string) => {
        const color = status === 'Aktif' ? 'green' : 'orange';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    { title: 'Keterangan', dataIndex: 'description', key: 'description', width: 160 },
  ];

  const sampleData = [
    {
      key: '1',
      id: 'ITEM-001',
      name: 'Item Contoh 1',
      category: 'Kategori A',
      status: 'Aktif',
      description: 'Deskripsi placeholder 1',
    },
    {
      key: '2',
      id: 'ITEM-002',
      name: 'Item Contoh 2',
      category: 'Kategori B',
      status: 'Aktif',
      description: 'Deskripsi placeholder 2',
    },
    {
      key: '3',
      id: 'ITEM-003',
      name: 'Item Contoh 3',
      category: 'Kategori C',
      status: 'Pending',
      description: 'Deskripsi placeholder 3',
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <Title level={2} className="!text-xl sm:!text-2xl !mb-1">
          {tDashboard('title')}
        </Title>
        <Paragraph type="secondary" className="text-xs sm:text-sm !mb-0">
          {tDashboard('welcome')}
        </Paragraph>
      </div>

      {/* Grid Statistik: 2 kolom di mobile (xs=12), 4 kolom di desktop (lg=6) */}
      <Row gutter={[10, 10]} className="sm:gutter-4">
        {stats.map((stat, idx) => (
          <Col xs={12} sm={12} lg={6} key={idx}>
            <Card size="small" className="shadow-xs rounded-lg p-1 sm:p-2">
              <Statistic
                title={<span className="text-xs sm:text-sm text-gray-500">{stat.title}</span>}
                value={stat.value}
                styles={{ content: { fontSize: '1.25rem', fontWeight: 600 } }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Tabel dengan scroll horizontal di layar kecil */}
      <Card
        title={<span className="text-sm sm:text-base font-semibold">Tabel Ringkasan Data</span>}
        size="small"
        className="shadow-xs rounded-lg overflow-hidden mt-4"
      >
        <Table
          dataSource={sampleData}
          columns={columns}
          pagination={false}
          scroll={{ x: 500 }}
          size="small"
        />
      </Card>
    </div>
  );
}
