import * as React from "react";
import { Route } from "react-router-dom";
import { CurateStage } from "./components/stages/CurateStage";
import { SessionStage } from "./components/stages/SessionStage";
import { WelcomeStage } from "./components/stages/WelcomeStage";

export class CurateRouter extends React.Component {
  public render() {
    return (
      <>
        <Route exact path="/" component={WelcomeStage} />
        <Route path="/curate" component={CurateStage} />
        <Route path="/sessions" component={SessionStage} />
      </>
    );
  }
}