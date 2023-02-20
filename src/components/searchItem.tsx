import React, { useRef, useEffect } from "react";

import { Box, Grid, Skeleton } from "@mui/material"
import AreaMap from "./areaMap";

import { changeLoadingAction } from "../store/module/search";
import { useAppSelector, shallowEqualApp, useAppDispatch } from "../store";

import fieldBold from "../utils/fieldBold";
import growth from "../utils/growth";
import matchDate from "../utils/matchDate";

interface searchItemType {
    item: {
        name: string,
        search_msv: any[]
    };
}

function SearchItem(props: searchItemType) {
    const { keyWord, loading } = useAppSelector(function (state) {
        return {
            loading: state.search.loading,
            keyWord: state.search.keyWord
        }
    }, shallowEqualApp);
    const dispatch = useAppDispatch();

    const { item: { name, search_msv } } = props;
    const len = search_msv.length;
    const [startCoord, endCoord] = [search_msv[0], search_msv[len - 1]];
    const [startX, startY, endX, endY] = [startCoord.date, startCoord.sv, endCoord.date, endCoord.sv];


    const areaMapBoxRef = useRef<HTMLDivElement>();
    useEffect(function () {
        const timeout = setTimeout(function () {
            dispatch(changeLoadingAction(false))
        }, 2000);

        return function () {
            clearTimeout(timeout);
        }
    })

    return <Grid item xs={10} sm={6} md={3} sx={{ overflow: "hidden", cursor: "pointer" }}>
        <Box sx={loading ? {} : {
            border: "1px solid #ccc",
            boxShadow: "2px 2px 2px 2px #000",
            backgroundColor: "#fff"
        }}>
            <Box sx={{
                margin: "15px 0 15px 15px"
            }}>
                {loading ? <Skeleton variant="text" sx={{ width: "70%", fontSize: 25 }} /> : <Box sx={{
                    width: "100%",
                    margin: "15px 0",
                    fontSize: 25,
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                }} dangerouslySetInnerHTML={{ __html: fieldBold(name, keyWord) }}></Box>}
                {loading ? <Skeleton variant="text" sx={{ width: "30%", fontSize: 18 }} /> : <Box sx={{
                    color: "#8a8a8a"
                }}>
                    growth:{growth(startY, endY)
                    }
                </Box>}
            </Box>
            <Box
                ref={areaMapBoxRef}
                sx={{
                    width: "100%",
                }}>
                {loading ? <Skeleton variant="rectangular" sx={{
                    width: "100%", height: areaMapBoxRef.current ? areaMapBoxRef.current.clientWidth / 2 :
                        {
                            xs: "200px",
                            sm: "150px",
                            md: "90px"
                        }
                }} /> : <AreaMap parInfo={areaMapBoxRef.current} data={search_msv} SE={{ startX, startY, endX, endY }} />
                }
            </Box>
            <Box sx={{
                height: "40px",
                textAlign: "center",
                lineHeight: "40px",
                color: "#8a8a8a"
            }}>
                {loading ? <Skeleton variant="text" sx={{
                    width: {
                        xs: "40%",
                        sm: "60%",
                        md: "100%"
                    }, margin: "0 auto"
                }} /> : matchDate(startX, endX)}
            </Box>
        </Box>
    </Grid>
};

export default SearchItem;