import ProductsList from "../../components/ProductsList";
import Navbar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer"
import client from "../../apollo.client";
import { GET_PRODUCTS } from "../../queries/products/get-products";
import Head from "next/head";

const Products = ({products, navBar}) => {

    return (
        <>
            <Head>
                <title>Produits</title>
                <meta name="description" content="Generated by create next app" />
            </Head>   
            <Navbar navBar={navBar} />
            <div className="pt-[70px]"> </div>
            <ProductsList products={products}/>
            <Footer navBar={navBar}/>  
        </>
    );
};

export default Products;

export async function getStaticProps() {
    const { data } = await client.query({query: GET_PRODUCTS})
    const navBar = data.navigations[0].navBar
    const products = data.products
    return {
      props: {
        products,
        navBar
      },
   };
  }