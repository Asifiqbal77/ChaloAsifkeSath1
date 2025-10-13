import Navigationbar from "./Navigationbar";
import Herosection from "./Herosection";
import Destinations from "./Destinations";
import Footer from "./Footer";
import Tours from"./Tours";
import TourPackagesTable from "./TourPackagesTable";
//  import ProductDetails from "./ProductDetails.module";
//  import Product from "./Product";
// import Button from "./Button";

 function Landingpage(){
    return ( 
    <>
    {/* <Button/> */}
    {/* <ProductDetails/> */}
    {/* <Product/>*/}
     <Navigationbar/>
    <Herosection/>
    <Tours/>
    <TourPackagesTable/>
    {/* <Destinations/>  */}
    <Footer/>  
    
      </>
    );
 } 
 export default Landingpage;