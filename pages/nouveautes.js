import { GET_PRODUCTS } from "../queries/products/get-products";
import client from "../apollo.client";
import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import ProductsList from "../components/ProductsList";
import Head from "next/head";

const Nouveautés = ({navBar, products}) => {
    return (
        <>
            <Head>
                <title>Nouveautés</title>
                <meta name="description" content="Generated by create next app" />
            </Head> 
            <Navbar navBar={navBar} />
            <div className="pt-[70px]"> </div>
            <ProductsList products={products}/>
            <Footer navBar={navBar}/>  
        </>
    );
};

export default Nouveautés;

export async function getStaticProps() {
    const { data } = await client.query({query: GET_PRODUCTS})
    const navBar = data.navigations[0].navBar
    const products = data.products.slice(0, 5)
    return {
      props: {
        products,
        navBar
      },
   };
  }