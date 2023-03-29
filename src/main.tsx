import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// comment out following lines to use antd
// import "@shopify/polaris/build/esm/styles.css";
// import enTranslations from "@shopify/polaris/locales/en.json";
// import { AppProvider } from "@shopify/polaris";

// Comment out following line to use polaris
import "antd/dist/reset.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        {/* <AppProvider i18n={enTranslations}>
            <App />
        </AppProvider> */}
        <App />
    </React.StrictMode>
);
