import React, {useEffect, useState} from 'react';
import {Box, Container, Stack, Typography} from "@mui/material";
import {colors} from "../constants/colors";
import Category from "../category";
import {ApiService} from "../../apiService/api.service";
import Videos from "../videos/videos";

const Main = () => {
    const [selectCategory, setselectCategory] = useState('New')
    const [videos, setVideos] = useState([])

    const selectCategoryHandler = category => setselectCategory(category)


    useEffect(() => {
        ApiService.fetching(`search?part=snippet&q=${selectCategory}`).then(data => setVideos(data.items))
    }, [selectCategory])

    return (
        <Stack>
            <Category selectCategoryHandler={selectCategoryHandler} selectCategory={selectCategory}/>
            <Box p={2} sx={{height: '90vh'}}>
                <Container maxWidth={'90%'}>
                    <Typography variant='h4' sx={{fontWeight: 'bold', mb: 2}}>
                        {selectCategory} <span style={{color: colors.purple}}>videos</span>
                    </Typography>
                    <Videos videos={videos}/>
                </Container>
            </Box>

        </Stack>
    );
}

export default Main;