import ky from 'ky';

const firebaseApi = ky.create({ prefixUrl: import.meta.env.VITE_FIREBASE_API });

export const sendOrder = (data) => {
  /*
    CRUD - запросы
    get - получение,
    post - отправка,
    delete - удаление,
    put - частичная перезапись,
    patch - замена записи
  */
  return firebaseApi.post('orders.json', { json: data });
};
