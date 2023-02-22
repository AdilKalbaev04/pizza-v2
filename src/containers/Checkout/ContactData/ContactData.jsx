import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import { sendOrder } from '@/api/request';
import Button from '@/components/UI/Button/Button';
import { Loader } from '@/components/UI/Loader/Loader';

import styles from './ContactData.module.css';

const ContactData = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    address: '',
    tel: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const { ings } = useOutletContext();

  const changeHandler = (event) => {
    setContact((contact) => {
      return {
        ...contact,
        [event.target.name]: event.target.value,
      };
    });
  };

  const onDataSend = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const order = {
      ingredients: { ...ings },
      customer: { ...contact },
    };

    sendOrder(order).finally(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  };

  if (isLoading) return <Loader />;

  return (
    <div className={styles.contactData}>
      <h3 className={styles.title}>Введите свои данные</h3>
      <form onSubmit={onDataSend}>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={contact.name}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Ваш email"
            value={contact.email}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="text"
            name="address"
            placeholder="Ваш адрес"
            value={contact.address}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="tel"
            name="tel"
            placeholder="Ваш номер телефона"
            value={contact.tel}
            onChange={changeHandler}
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
