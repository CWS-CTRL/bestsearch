import React from "react";

import { Grid } from "@mui/material";
import SearchItem from "./searchItem";

interface searchListType {
    list: any[]
}

function SearchList(props: searchListType) {
    const { list } = props;

    return <Grid container rowSpacing={{ xs: 2, sm: 2, md: 3, lg: 4 }} columnSpacing={{
        xs: 0,
        sm: 2,
        md: 3,
        lg: 4
    }}>{
            list.map((item, index) => <SearchItem key={index} item={item} />)
        }</Grid>
}

export default SearchList;