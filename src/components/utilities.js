import { BreakpointProvider as Breakpoint } from "react-socks";
import { Helmet } from "react-helmet";

import "../styles/blueprint.scss";

const Utilities = ({ children }) => {
  return (
    <Breakpoint>
      <main>{children}</main>
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
