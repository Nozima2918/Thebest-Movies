import React from 'react';
import CircularProgress from "@mui/material/CircularProgress";
// import {colors} from "../../constants/colors";
import {Box,Stack} from "@mui/material";


const Loader = () => {
    return (
        <Box minHeight={'90vh'}>
            <Stack  style={{marginTop:'25px'}}  alignItems={'center'} height={'80vh'}>
                <CircularProgress/>
            </Stack>
        </Box>
    );
}

export default Loader;