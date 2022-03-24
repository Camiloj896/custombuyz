import { GlobalProvider } from './../context/GlobalProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
      <div id='general-snackbar'></div>
    </GlobalProvider>
  );
}

export default MyApp;