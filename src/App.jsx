import React from 'react';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from './redux/store';
import CartPage from './components/CartPage';
import { products } from './components/productsData';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <CartPage products={products} />
      </Container>
    </Provider>
  );
}

export default App;