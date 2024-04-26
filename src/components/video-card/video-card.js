import React from 'react';
import {Card, CardMedia} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import {CheckCircle} from "@mui/icons-material";
import {colors} from "../constants/colors";
import moment from "moment";
import {Link} from "react-router-dom";

const VideoCard = ({video}) => {
    return (
        <Card
            sx={{width: {xs: '100%', sm: '330px', md: '355px'}, boxShadow: 'none', borderRadius: 2}}
        >

            <Link to={`/video/${video.id.videoId}`}>
                <CardMedia
                    image={video?.snippet?.thumbnails?.high?.url}
                    alt={video?.snippet?.title}
                    sx={{width: {xs: '100%', sm: '350px', md: '355px'}, height: '180px'}}
                />
            </Link>
            <CardContent sx={{background: colors.secondary, height: '200px', position: 'relative'}}>

                <Link to={`/video/${video.id.videoId}`}>
                    <Typography my={'5px'} sx={{opacity: '.4'}}>
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </Typography>
                    <Typography variant='subtitle1' fontWeight={'bold'}>
                        {video?.snippet?.title.slice(0, 50)}
                    </Typography>
                    <Typography variant='subtitle2' sx={{opacity: '.6'}}>
                        {video?.snippet?.description.slice(0, 70)}
                    </Typography>

                </Link>
                <Link to={`/channel/${video.snippet.channelId}`}>
                    <Stack
                        direction={'row'}
                        position={'absolute'}
                        bottom={'10px'}
                        alignItems={'center'}
                        gap={'5px'}
                    >

                        <Avatar src={video?.snippet?.thumbnails?.high?.url}/>
                        <Typography variant={'subtitle2'} color={'gray'}>
                            {video?.snippet?.channelTitle}
                            <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}}/>
                        </Typography>
                    </Stack>
                </Link>

            </CardContent>
        </Card>
    )
}

export default VideoCard;