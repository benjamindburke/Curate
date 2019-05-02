import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./frontend/components/Header";
import { CurateRouter } from "./frontend/CurateRouter";

export class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <CurateRouter />
        </div>
      </Router>
    );
  }
}