import React from 'react';
import Navbar from './components/base/Navbar';
import Footer from './components/base/Footer';
import Home from './components/page/Home';


function App() {

  return <>
  <Navbar />
  <div className="container my-3 mx-2">
       <div className="row">

         <Home />

      </div>
  </div>
  <Footer />
</>
  
}

export default App;
