import { BreakpointProvider as Breakpoint } from "react-socks";
import { Helmet } from "react-helmet";

import "../styles/blueprint.scss";

const Utilities = ({ children }) => {
  return (
    <Breakpoint>
      <main class="vw-100">{children}</main>
      <Helmet>
        <title>Ciarel</title>
        <meta
          property="og:description"
          content="Front-End Developer, Ali Mousazade"
        />
        <meta property="og:title" content="Ciarel" />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content="rainbow-galleria.netlify.app/512.png"
        />
        <meta
          property="og:image:secure_url"
          content="rainbow-galleria.netlify.app/512.png"
        /> */}
        <meta property="og:url" content={`https://ciarel.com/#/`} />
      </Helmet>
    </Breakpoint>
  );
};

export default Utilities;
