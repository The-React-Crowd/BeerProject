import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import routes from './routes';

function App() {

  return <>
  <Navbar />
  <div className="container my-3 mx-2">
       <div className="row">
        <Routes>
            {routes.map((item, index) => (
              <Route key={index} path={item.path} element={<item.element />} />
            ))}
        </Routes>
      </div>
  </div>
  <Footer />
</>
  
}

export default App;
