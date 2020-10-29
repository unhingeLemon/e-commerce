import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          {/* the 'exact' will only show homesScreen on / route */}
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
