import React from 'react'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero'
import Products from './components/Products'
import {productData,productDataTwo} from './components/Products/data'
import Feature from './components/Features'
import {FooterContainer} from './container/footer';
function App() {
  return (
    <>
    <Router>
      <GlobalStyle/>
<Hero/>
<Products heading='Select Service' data={productData}/>
<Feature/>
<Products heading='Request ' data={productDataTwo}/>

    </Router >
<FooterContainer/>
</>
  );
}

export default App;
