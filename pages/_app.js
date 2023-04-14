import '../styles/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { NotificationProvider } from "../contexts/notification";

import { CookiesProvider } from 'react-cookie';

//import { IntercomProvider } from 'react-use-intercom';

import Amplify from 'aws-amplify';

Amplify.configure({
  ssr: true
});

/** 
<IntercomProvider
        appId={process.env.NEXT_PUBLIC_INTERCOM_APP_ID}
        autoBoot
      >
 </IntercomProvider>*/

const App = ({ Component, pageProps }) => {

  return (
    <CookiesProvider>      
        <NotificationProvider>
          <Component {...pageProps} />
        </NotificationProvider>     
    </CookiesProvider>
  );
}

export default App;
