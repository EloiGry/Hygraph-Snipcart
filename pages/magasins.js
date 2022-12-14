import client from "../apollo.client";
import { GET_STORES } from "../queries/stores/get-stores";
import { FaExternalLinkAlt } from 'react-icons/fa';
import Map from "../components/Map";
import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import Head from "next/head";

const magasins = ({stores, navBar}) => {
    return (
        <>
          <Head>
            <title>Magasins</title>
            <meta name="description" content="Generated by create next app" />
          </Head> 
          <Navbar navBar={navBar}/>
          <div className="pt-[100px]">
            {stores.map(store => {
                return (
                        <div key={store.id} className='px-8 md:px-[72px] md:flex md:items-center md:justify-start mb-10 md:mb-5'>
                          <div className="w-[300px] md:border-r border-white">
                            <p>
                            { store.name }
                            </p>
                            <address>
                            { store.address }
                            </address>
                            <p>
                            { store.phone }
                            </p>
                            <div className="flex items-center">
                            <button className="underline mr-5">
                                View on Map
                            </button>
                            <a className="flex items-center underline" href={`https://www.google.com/maps/dir//${store.location.latitude},${store.location.longitude}/@${store.location.latitude},${store.location.longitude},12z/`} target="_blank" rel="noreferrer">
                                <span className="pr-1"> Get Directions </span>
                                <FaExternalLinkAlt />
                            </a>
                            </div>
                          </div>
                          <Map latitude={store.location.latitude} longitude={store.location.longitude}/>
                        </div>
                )
            })}

          </div>  
          <Footer navBar={navBar}/>
        </>
    );
};

export default magasins;

export async function getStaticProps() {
    const { data } = await client.query({query: GET_STORES })
    const stores = data.stores
    const navBar = data.navigations[0].navBar
    return {
      props: {
        stores,
        navBar
      },
   };
  }