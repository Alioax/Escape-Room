import { BreakpointProvider as Breakpoint } from "react-socks";
import { Helmet } from "react-helmet";

import { Switch, Route, Link, useLocation } from "react-router-dom";
import "../styles/blueprint.scss";

import Home from "../routes/home";
import Free from "../routes/free";
import Lost from "../routes/lost";

const Utilities = ({ children }) => {
  return (
    <Breakpoint>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/lost">
            <Lost />
          </Route>
          <Route path="/free">
            <Free />
          </Route>
        </Switch>
      </main>
      <Helmet>
        <title>قمار باز</title>
        <meta property="og:description" content="پایان قمار باز" />
        <meta property="og:title" content="پایان قمار باز" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://the-ending.vercel.app/`} />
      </Helmet>
    </Breakpoint>
  );
};

export default Utilities;
