
import Footerbar from './components/Footerbar'
import Items from './components/Items';
import products from "./details";

function Home() {
  return(
    <>
    {products.map((products) => {return <Items title={products.title} image={products.image} price={products.price} desc={products.desc} offer={products.offerPrice}  />})}
    </>
  )
}

export default Home;
