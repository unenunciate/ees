import '../styles/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { NotificationProvider } from "../contexts/notification";

import { CookiesProvider } from 'react-cookie';

import { IntercomProvider } from 'react-use-intercom';

import Amplify from 'aws-amplify';

Amplify.configure({
  ssr: true
});


const App = ({ Component, pageProps }) => {

  return (
    <CookiesProvider>
      <IntercomProvider
        appId={process.env.NEXT_PUBLIC_INTERCOM_APP_ID}
        autoBoot
      >
        <NotificationProvider>
          <Component {...pageProps} />
        </NotificationProvider>
      </IntercomProvider>
    </CookiesProvider>
  );
}

export default App;
