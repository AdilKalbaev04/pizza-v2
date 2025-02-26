import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import { OrderInfo } from './components/Order/OrderInfo';
import Checkout from './containers/Checkout/Checkout';
import ContactData from './containers/Checkout/ContactData/ContactData';
import { Orders } from './containers/Orders';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<PizzaBuilder />} />
        <Route path="/checkout" element={<Checkout />}>
          <Route path="contact-data" element={<ContactData />} />
        </Route>
        <Route path="/orders">
          <Route index element={<Orders />} />
          <Route path=":id" element={<OrderInfo />} />
        </Route>
        <Route path="*" element={<h1>404 Не найдена страница.</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
