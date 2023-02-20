import { Route, Routes } from 'react-router-dom';

import Checkout from './containers/Checkout/Checkout';
import ContactData from './containers/Checkout/ContactData/ContactData';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PizzaBuilder />} />
        <Route path="/checkout" element={<Checkout />}>
          <Route path="contact-data" element={<ContactData />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
