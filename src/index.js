import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/base";
import 'src/style/global.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
