import * as React from "react";
import { Link } from "react-router-dom";
import "frontend/components/Header.scss";

export class Header extends React.Component {
  public render() {
    return (
      <div className="header-nav-bar">
        <div><Link to="/">Curate for Spotify</Link></div>
        <div><Link to="/curate">Curate a playlist</Link></div>
        <div><Link to="/sessions">Start a session</Link></div>
      </div>
    );
  }
}
