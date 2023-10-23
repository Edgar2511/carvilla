import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider
        theme={{
          bgMain: "gold",
          bgSecondary: "green",
        }}
      >
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
