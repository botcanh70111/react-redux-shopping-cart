import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Message from './components/Message';
import CartList from './components/CartList';

function App() {
  return (
    <div>
      <Header></Header>
      <main id="mainContainer">
        <div className="container">
          <ProductList />
          <Message></Message>
          <CartList></CartList>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}


export default App;
