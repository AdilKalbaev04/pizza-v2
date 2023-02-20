import { Outlet } from 'react-router-dom';

import { Pizza } from '@/components/Pizza/Pizza';
import Button from '@/components/UI/Button/Button';

const CheckoutSummary = ({ ings, cancel, ordered }) => {
  return (
    <>
      <Pizza ings={ings} />
      <div>
        <h1 style={{ textAlign: 'center' }}>Подтвердите свой заказ</h1>
        <div style={{ textAlign: 'center' }}>
          <Button type="danger" click={cancel}>
            Отмена
          </Button>
          <Button type="success" click={ordered}>
            Продолжить
          </Button>
        </div>

        <Outlet context={{ ings }} />
      </div>
    </>
  );
};

export default CheckoutSummary;
