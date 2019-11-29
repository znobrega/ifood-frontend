import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import iFood from "./pages/iFood";

// https://www.youtube.com/watch?v=g_aMpyMvQ9k
// https://daphnelaunay.fr/
// https://www.youtube.com/watch?v=bLOIQNzlPqw
// https://www.youtube.com/watch?v=x8AcaJ5mucE

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/ifood" component={iFood} />
      </Switch>
    </BrowserRouter>
  );
}
