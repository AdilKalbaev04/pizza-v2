import { Pizza } from '@/components/Pizza/Pizza';
import Button from '@/components/UI/Button/Button';

const CheckoutSummary = ({ ings }) => {
  return (
    <>
      <Pizza ings={ings} />
      <div>
        <h1 style={{ textAlign: 'center' }}>Подтвердите свой заказ</h1>
        <div style={{ textAlign: 'center' }}>
          <Button type="danger" click={() => {}}>
            Отмена
          </Button>
          <Button type="success" click={() => {}}>
            Продолжить
          </Button>
        </div>
      </div>
    </>
  );
};

export default CheckoutSummary;
