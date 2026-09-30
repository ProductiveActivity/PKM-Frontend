'use client';

import React from 'react';
import { Modal } from 'antd';
import { useTranslations } from 'next-intl';

interface ModalWarningProps {
  open: boolean;
  title?: string;
  content: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ModalWarning: React.FC<ModalWarningProps> = ({
  open,
  title,
  content,
  onConfirm,
  onCancel,
}) => {
  const t = useTranslations('common');

  return (
    <Modal
      open={open}
      title={title || t('error')}
      onOk={onConfirm}
      onCancel={onCancel}
      okText={t('confirm')}
      cancelText={t('cancel')}
      okButtonProps={{ danger: true }}
    >
      <p>{content}</p>
    </Modal>
  );
};
