import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container className="py-5">
          <h1>Gametime Sneakers</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;

