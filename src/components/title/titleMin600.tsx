import react from "react";

import { Box } from "@mui/material";

import { NavLink } from "react-router-dom";

//页面宽度大于600px显示
function TitleMin600() {
    return <Box sx={{
        display: "flex",
        width: "100&",
        height: 65
    }}>
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
        }}>
            <NavLink to="/">
                <Box sx={{
                    color: "#000"
                }}>
                    <strong>Best</strong>
                    <span>Search</span>
                </Box>
            </NavLink>
        </Box>
    </Box>
}

export default TitleMin600;