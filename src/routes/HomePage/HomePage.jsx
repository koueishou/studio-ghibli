import React from "react";

import * as Style from "./style";

const HomePage = () => (
  <Style.ZeroState>
    This is a fans project for Studio Ghibli.
    <br />
    Check out
    {" "}
    <a href="https://github.com/sealman234/studio-ghibli">
      the repo at github.com
    </a>
    .
  </Style.ZeroState>
);

export default HomePage;
