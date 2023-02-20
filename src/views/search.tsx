import React, { useEffect } from "react";
import { Box } from "@mui/material";
import SearchList from "../components/searchList";
import { useLocation } from "react-router-dom";

import { changeKeyWordAction, changeLoadingAction, getRequestData } from "../store/module/search";
import { useAppSelector, useAppDispatch, shallowEqualApp } from "../store";


//搜索页
function Search() {
    const { productTrends, keyWord } = useAppSelector(function (state) {
        return {
            productTrends: state.search.productTrends,
            keyWord: state.search.keyWord,
        }
    }, shallowEqualApp)
    const dispatch = useAppDispatch();
    const location = useLocation();

    useEffect(function () {
        dispatch(getRequestData());
        //获取搜索参数
        dispatch(changeKeyWordAction(location.pathname.split("/")[2].replaceAll(/\+/g, " ")));
        dispatch(changeLoadingAction(true));
    }, [keyWord])

    return (
        <Box sx={{
            width: {
                xs: "80%",
                md: "64%",
                lg: "54%"
            },
            margin: "0 auto",
            // backgroundColor: "#ff0000"
        }}>
            <Box sx={{
                margin: "25px 0",
                fontSize: 25
            }}>Related product trends</Box>
            <Box>
                <SearchList list={productTrends} />
            </Box>
        </Box>
    )
}
//npm install @mui/material @emotion/react @emotion/styled
export default Search;