import React from "react";

import { Box } from "@mui/material";
import { PsychologyAlt } from '@mui/icons-material';

//匹配404
function NotFound() {
    return <Box sx={{ textAlign: "center", fontSize: 30 }}>好像走错地方了<PsychologyAlt sx={{ fontSize: 30, verticalAlign: "bottom" }} /></Box>
}

export default NotFound;