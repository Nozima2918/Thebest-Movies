import React from 'react';
import {Stack} from "@mui/material";
import {colors} from "../constants/colors";
import {Link} from "react-router-dom";
import {logo} from "../constants";
import Box from "@mui/material/Box";
import SearchBar from "../search-bar/search-bar";

const Navbar = () => {
    return (
        <Stack direction={"row"}
               justifyContent={'space-between'}
               alignItems={'center'}
               p={'2'}
               sx={{position: "sticky", top: 0,  zIndex: 999, backgroundColor: colors.secondary, p:1}}>

            <Link to={'/'}>
                <img src={logo} alt="logo" height={70} width={101}/>
            </Link>
            <SearchBar/>
            <Box/>
        </Stack>
    );
}

export default Navbar;