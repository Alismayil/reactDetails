import './App.css';
import Cards from './components/cards/cards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/pages/contact/contact';
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import Details from './components/pages/details/contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;                     