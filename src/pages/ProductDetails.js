import React, {useContext} from 'react';

import { useParams } from 'react-router-dom';

import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {

  const {id} = useParams()
  const {products} = useContext(ProductContext)
  const {addToCart} = useContext(CartContext)

  const product = products.find((item) =>{
    return item.id === parseInt(id) 
  })

  if(!product){
    return <section className='h-screen flex justify-center items-center'>Loading...</section>
  }


  const {title, price, description, image} = product

  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        
        <div className='flex flex-col lg:flex-row'>
          {/*image */}
          <div>
            <img src={image} alt=''/>

          </div>
            {/*text */}
           <div>text</div>
        </div>
        
       

      </div>
    </section>
  ) 
};

export default ProductDetails;
/*
export const ProductContext = createContext()





const ProductProvider = ({children}) => {
  //products state
  const [products, setProducts] = useState([])


 useEffect(()=>{
    //fetch products
    const fetchProducts = async () =>{
        const response = await fetch('https://fakestoreapi.com/products')
        //.then(res => res.json())
        //.then(json => console.log(json))

        const data = await response.json()
        //console.log(data)
        setProducts(data)
    }

    fetchProducts()
 }, []) 
  


  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
};

*/
