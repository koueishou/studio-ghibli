import React from "react";
import { useRouteError } from "react-router-dom";

import * as Style from "./style";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Style.ErrorPage>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </Style.ErrorPage>
  );
};

export default ErrorPage;
