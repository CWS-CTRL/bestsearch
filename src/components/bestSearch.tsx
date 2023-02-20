import React, { useState, useEffect } from "react";
import type { KeyboardEvent, ChangeEvent } from "react";

import { Box, TextField, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

import { useNavigate, useLocation } from "react-router-dom";
import { changeKeyWordAction, getRequestData } from "../store/module/search";
import { useAppSelector, useAppDispatch, shallowEqualApp } from "../store";

import transPath from "../utils/transPath";

function BestSearch() {
    const navigate = useNavigate();
    const { keyWord } = useAppSelector(function (state) {
        return {
            keyWord: state.search.keyWord
        }
    }, shallowEqualApp);

    const dispatch = useAppDispatch();
    const [textValue, setTextValue] = useState(keyWord);
    const location = useLocation();

    //网页搜索措施
    useEffect(function () {
        setTextValue(keyWord.replaceAll(/\++/g, " "));
    }, [keyWord])

    function searchKeyWord() {
        // dispatch(getRequestData());
        dispatch(changeKeyWordAction(textValue));
        navigate(`/search/${transPath(textValue)}`);
    }

    return (
        <>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: "100%",
            }}>
                <TextField
                    sx={{
                        width: "100%",
                        height: 40
                    }}
                    size="small"
                    value={textValue}
                    placeholder="Search for new products in 961K stores"
                    onChange={function (event: ChangeEvent<HTMLInputElement>) {
                        setTextValue(event.target.value);
                    }}
                    onKeyDown={function (event: KeyboardEvent) {
                        if (event.key === "Enter") {
                            searchKeyWord();
                        }
                    }}
                />
                <IconButton
                    sx={{
                        height: 40,
                        border: "1px solid #ccc",
                        borderRadius: 0,
                        marginLeft: "5px"
                    }}
                    onClick={searchKeyWord}>
                    <Search />
                </IconButton>
            </Box>
        </>
    )
}

export default BestSearch;