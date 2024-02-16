import "@radix-ui/themes/styles.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <Theme accentColor="iris" grayColor="mauve" appearance="inherit">
        <App />
      </Theme>
    </div>
  </React.StrictMode>
);
