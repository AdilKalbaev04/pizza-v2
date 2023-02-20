import Button from '@/components/UI/Button/Button';

import styles from './ContactData.module.css';

const ContactData = () => {
  return (
    <div className={styles.contactData}>
      <h3 className={styles.title}>Введите свои данные</h3>
      <form>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Ваше имя"
          />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Ваш email"
          />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="text"
            name="address"
            placeholder="Ваш адрес"
          />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="tel"
            name="tel"
            placeholder="Ваш номер телефона"
          />
        </div>
        <div className={styles.group}>
          <Button type="success" click={() => {}}>
            Заказать
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactData;
