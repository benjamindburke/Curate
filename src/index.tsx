import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { App } from "./App";


const renderApp = () => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById("root")
  );
}

declare const module: any;
if (module.hot) {
  module.hot.accept("./App", () => renderApp());
}

renderApp();
