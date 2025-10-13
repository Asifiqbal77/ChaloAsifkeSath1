
import './App.css'
 import Landingpage from "./Landingpage";
//import Responsive from './Responsive';
import Login from './Login';
import { Route , Routes } from 'react-router-dom';
// import loogin from './Loogin';
//import Workers from './Workers';
function App() {

  return (
    <>

    <Routes>
    <Route  path='/login' element = {<Login />}/>
      <Route path = '/' element = {<Landingpage />} />
    </Routes> 
          {/* <Workers/>
          <Loogin/> 
       <Login/> 
      <Responsive/> 
      <Landingpage/> */}
    </>
  );
}

export default App;
