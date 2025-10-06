
import './App.css'
 import Landingpage from "./Landingpage";
//import Responsive from './Responsive';
import Login from './Login';
import { Route , Routes } from 'react-router-dom';
function App() {

  return (
    <>
<<<<<<< HEAD

    <Routes>

      <Route  path='/login' element = {<Login />}/>
      <Route path = '/' element = {<Landingpage />} />
    </Routes>
     
=======
    {/* <Login/> 
   <Responsive/> */}
     <Landingpage/> 
>>>>>>> save-local-work
    </>
  );
}

export default App;
