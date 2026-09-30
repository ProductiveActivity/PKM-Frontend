'use client';

import React, { useTransition } from 'react';
import { Select } from 'antd';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

export const LanguageSwitcher: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <Select
      value={locale}
      loading={isPending}
      onChange={handleChange}
      options={[
        { value: 'id', label: '🇮🇩 Indonesia' },
        { value: 'en', label: '🇬🇧 English' },
      ]}
      style={{ width: 140 }}
      size="middle"
    />
  );
};
