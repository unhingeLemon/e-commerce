import { Fragment } from 'react';
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>WELCOME TO TINDAHAN</h1>
        </Container>
      </main>

      <Footer />
    </Fragment>
  );
}

export default App;
