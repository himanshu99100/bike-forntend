import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Productdetial from './pages/productdetial';
import Accesspage from './pages/Accesspage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';
import Productpage from './pages/Productpage';
import Teampage from './pages/Teampage.js';
import TCpage from './pages/TCpage.js';
import Privacypage from './pages/Privacypage.js';
import Refundpage from './pages/Refundpage.js';
import Shippingpage from './pages/Shippingpage.js';
import ScrollToTop from './components/Scrolltop.js';
function App() {

  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Routes>  
        <Route path='/' element={<Homepage />}> </Route>
          <Route path='accessories' element={<Accesspage />}> </Route>
          <Route path='about' element={<Aboutpage/>}> </Route>
          <Route path='contact' element={<Contactpage/>}> </Route>
          <Route path='Product/:name' element={<Productdetial />}> </Route>
          <Route path='Product' element={<Productpage />}> </Route>
          <Route path='team' element={<Teampage />}> </Route>
          <Route path='termsandconditions' element={<TCpage />}></Route>
          <Route path='privacypolices' element={<Privacypage />}></Route>
          <Route path='shippingpolices' element={<Shippingpage />}></Route>
          <Route path='refundpolices' element={<Refundpage />}></Route>
     </Routes> </Router>
    </div>
  );
}

export default App;
