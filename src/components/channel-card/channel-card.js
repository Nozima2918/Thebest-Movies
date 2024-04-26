import React from 'react';
import {Box, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import {CheckCircle} from "@mui/icons-material";
import {colors} from "../constants/colors";

const ChannelCard = ({video}) => {
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: {xs: '356px', md: '320px'},
                height: '326px',
                margin: 'auto',
            }}
        >

                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}
                >

                    <CardMedia
                        image={video?.snippet?.thumbnails?.high?.url}
                        alt={video?.snippet?.title}
                        sx={{
                            borderRadius: '50%',
                            height: '180px',
                            width: '180px',
                            mb: 2,
                        }}
                    />
                    <Typography variant={'h6'}>
                        {video?.snippet?.title}{' '}
                        <CheckCircle sx={{fontSize: '14px', color: colors.purple, ml: '5px'}}/>
                    </Typography>
                    {video?.statistics?.subscriberCount && (
                        <Typography sx={{fontSize: '15px', fontWeight: 500, color: 'gray'}}>
                            {parseInt(video?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                        </Typography>
                    )}
                </CardContent>

        </Box>
    )
}

export default ChannelCard;