import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';
import { IToastMessage, useToast } from '../../../hooks/toast';
import { Container } from './styles';

interface IToastProps {
  toast: IToastMessage;
  style: Record<string, unknown>;
}

const icons = {
  error: <FiAlertCircle size={20} />,
  info: <FiInfo size={20} />,
  success: <FiCheckCircle size={20} />,
};

const Toast: React.FC<IToastProps> = ({ toast, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, toast.id]);

  return (
    <Container
      styled={{ hasDescription: Boolean(toast.description), type: toast.type }}
      style={style}
    >
      {icons[toast.type || 'info']}

      <div>
        <strong>{toast.title}</strong>
        {toast.description && <p>{toast.description}</p>}
      </div>

      <button type="button" onClick={() => removeToast(toast.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
