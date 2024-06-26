import {Stack,Box} from '@mui/material';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';

const Videos = ({ videos , direction }) => {
  if(!videos?.length) return ('Loading....')

  
  return (
    <Stack direction={ direction || "row"} flexWrap="wrap" justifyContent="Start" gap={2}> {videos.map((item,idx)=>(
      <Box key={idx}>
        {item.id.videoId && <VideoCard video={item}/>}
        {item.id.channelId && <ChannelCard channelDetail={item}/>}
      </Box>
    ))}
      videos
    </Stack>
  )
}

export default Videos
