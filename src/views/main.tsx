import React from "react";
import { Box } from "@mui/material";
import BestSearch from "../components/bestSearch";

//  首页
function Main() {
    return (
        <Box sx={{
            width: "60%",
            margin: "0 20%"
        }}>
            <Box sx={{
                width: "100%",
                textAlign: "center",
                fontSize: 45,
                fontWeight: 500,
                margin: "50px 0"
            }}>Search Trends</Box>
            <Box sx={{
                width: "100%"
            }}><BestSearch /></Box>
        </Box>
    )
}

export default Main;