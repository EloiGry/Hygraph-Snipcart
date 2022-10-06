import '../styles/globals.css'
import { SnipcartProvider } from 'use-snipcart';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo.client';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <SnipcartProvider>
        <Component {...pageProps} />
      </SnipcartProvider>
    </ApolloProvider>
  )
  
}

export default MyApp
