
import './App.css'
 import Landingpage from "./Landingpage";
//import Responsive from './Responsive';
import Login from './Login';
import HunzaPage from './HunzaPage';
import Booking from './Booking';
import Navigationbar from './Navigationbar';
import { Route , Routes } from 'react-router-dom';
import Footer from './Footer';
import AboutUs from './Aboutus';
function App() {

  return (
    <>
           <Navigationbar/>
    <Routes>
        
      <Route  path='/login' element = {<Login />}/>
      <Route path = '/' element = {<Landingpage />}/>
       <Route path='/hunza' element={<HunzaPage/>}/>
       <Route path='/booking' element={<Booking/>}/>
       <Route path='/aboutus' element={<AboutUs/>}/>
       

    </Routes>
     <Footer/>
    </>
  );
}

export default App;
