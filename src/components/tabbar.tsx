import React, { useState, useEffect } from "react";
import TitleMin600 from "./title/titleMin600";
import TitleMax600 from "./title/titleMax600";

import { Box, useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";


import { changeIsMainAction, changeLoadingAction } from "../store/module/search";
import { useAppSelector, useAppDispatch, shallowEqualApp } from "../store";

import BestSearch from "./bestSearch";

function Tabbar() {
    const matchs = useMediaQuery("(min-width:600px)");

    const { keyWord, isMain } = useAppSelector((state) => ({
        keyWord: state.search.keyWord,
        isMain: state.search.isMain,
        loading: state.search.loading
    }), shallowEqualApp)
    const dispatch = useAppDispatch();
    const location = useLocation();

    useEffect(function () {
        dispatch(changeIsMainAction(location.pathname === "/"));
    }, [location])

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "flex-start",
            // gap: "5%",
            width: "100%",
            height: 65,
            borderBottom: "1px solid #ccc"
        }}>
            <Box sx={{
                margin: "0 10px"
            }}>
                {
                    matchs ? <TitleMin600 /> : <TitleMax600 />
                }
            </Box>
            {!isMain && <Box sx={{
                width: matchs ? "80%" : "65%",
            }}><BestSearch /></Box>}
        </Box>)
}

export default Tabbar;