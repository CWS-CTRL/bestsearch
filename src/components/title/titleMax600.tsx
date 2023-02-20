import react from "react";

import { Box } from "@mui/material";

import { NavLink } from "react-router-dom";

//页面宽度小于600px显示
function TitleMax600() {
    return <Box sx={{
        display: "flex",
        width: 65,
        height: 65,
    }}>
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            backgroundColor: "#000"
        }}>
            <NavLink to="/">
                <Box sx={{
                    fontSize: 28,
                    color: "#fff"
                }}>ST</Box>
            </NavLink>
        </Box>
    </Box>
}

export default TitleMax600;