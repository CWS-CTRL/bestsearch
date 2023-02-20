import React, { Suspense } from 'react';

import Tabbar from './components/tabbar';

import { useRoutes } from "react-router-dom"
import routes from './router';

function App() {
  return (
    <>
      <Tabbar />
      <Suspense fallback="">
        <div>{useRoutes(routes)}</div>
      </Suspense>
    </>
  );
}

export default App;
