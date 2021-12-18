import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";

 import { Provider as AuthProvider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <AuthProvider session={pageProps.session}>
    <MoralisProvider appId={process.env.NEXT_PUBLIC_APP_ID} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
       <Component {...pageProps} />
    </MoralisProvider>
    </AuthProvider>
 
  
  </div>
   
  )
  
}

export default MyApp
