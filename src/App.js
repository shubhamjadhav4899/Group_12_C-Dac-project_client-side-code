
import Navigation from './customer/component/Navigation/Navigation';
import './App.css';
import HomePage from './customer/component/pages/HomePage/HomePage';
import MainFooter from './customer/component/Footer/MainFooter';
import Product from './customer/component/Product/Product';



function App() {
  return (
    <div className="">
    <Navigation/>  
    <div>
      {/* <HomePage/> */}
      <Product/>
    </div>
      <MainFooter/>
    </div>
  );
}

export default App;
