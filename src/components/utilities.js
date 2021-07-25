import { BreakpointProvider as Breakpoint } from "react-socks";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

import { Switch, Route, Link, useLocation } from "react-router-dom";
import "../styles/blueprint.scss";

import Home from "../routes/home";
import Free from "../routes/free";
import Lost from "../routes/lost";

const Utilities = ({ children }) => {
  const haveWon = localStorage.getItem("haveWon");
  return (
    <Breakpoint>
      <main>
        <div className="container my-4">
          <Switch>
            <Route exact path="/">
              {haveWon === "0" ? (
                <Lost />
              ) : haveWon === "1" ? (
                <Free />
              ) : (
                <Home />
              )}
            </Route>
            <Route path="/lost">
              <Lost />
            </Route>
            <Route path="/free">
              <Free />
            </Route>
          </Switch>
        </div>
      </main>
      <Helmet>
        <title>قمار باز</title>
        <meta property="og:description" content="قمار آخر" />
        <meta property="og:title" content="قمار آخر" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://the-ending.vercel.app/`} />
      </Helmet>
    </Breakpoint>
  );
};

export default Utilities;
