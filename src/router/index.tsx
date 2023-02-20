import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

const Main = lazy(() => import("../views/main"));
const Search = lazy(() => import("../views/search"));
const NotFound = lazy(() => import("../views/notFound"));

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Main />
    },
    {
        path: "/search/:keyword",
        element: <Search />
    }, {
        path: "*",
        element: <NotFound />
    }
]

export default routes;