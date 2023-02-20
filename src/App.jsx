import { Route, Routes } from 'react-router-dom';

import Checkout from './containers/Checkout/Checkout';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PizzaBuilder />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
