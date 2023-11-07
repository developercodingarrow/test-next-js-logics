import "../styles/utils/icons.module.css";
import "../styles/global.css";
import { faCoffee, faEnvelope, faUser } from "../Utiles/icons";
import UIContextApiProvider from "../contextApi/UIContextApi";
import SimpleDataFilterContextApiProvider from "../contextApi/logicContentAPI/SimpleEComerseFillterContextApi";

function MyApp({ Component, pageProps }) {
  return (
    <UIContextApiProvider>
      <SimpleDataFilterContextApiProvider>
        <Component {...pageProps} />
      </SimpleDataFilterContextApiProvider>
    </UIContextApiProvider>
  );
}

export default MyApp;
