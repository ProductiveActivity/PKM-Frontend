'use client';

import React from 'react';
import { Card, Empty } from 'antd';

interface MapCanvasProps {
  center?: [number, number];
  zoom?: number;
  className?: string;
}

export const MapCanvas: React.FC<MapCanvasProps> = ({ className }) => {
  return (
    <Card
      className={`w-full min-h-[260px] sm:min-h-[400px] flex items-center justify-center bg-slate-100 rounded-xl overflow-hidden shadow-xs border-gray-200 ${
        className || ''
      }`}
    >
      <Empty
        description={
          <span className="text-gray-500 font-medium text-xs sm:text-sm">
            Container Peta (Map Canvas)
          </span>
        }
      />
    </Card>
  );
};
