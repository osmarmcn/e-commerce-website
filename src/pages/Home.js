import React, {useContext} from 'react';
import { ProductContext } from '../contexts/ProductContext';

//import product context


const Home = () => {

  const {products} = useContext(ProductContext)

  return <div>Homepage</div>;
};

export default Home;
