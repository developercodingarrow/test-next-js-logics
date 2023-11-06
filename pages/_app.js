import "../styles/utils/icons.module.css";
import "../styles/global.css";
import { faCoffee, faEnvelope, faUser } from "../Utiles/icons";
import UIContextApiProvider from "../contextApi/UIContextApi";

function MyApp({ Component, pageProps }) {
  return (
    <UIContextApiProvider>
      <Component {...pageProps} />;
    </UIContextApiProvider>
  );
}

export default MyApp;
