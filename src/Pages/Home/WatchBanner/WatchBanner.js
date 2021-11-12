// import { Box} from '@mui/material';
import React from 'react';
import background from '../../../images/watchBanner/C1-full-black-banner-compressor.png'

const WatchBanner = () => {
    // const background = {
    //     backgroundImage:"../../../images/watchBanner/C1-full-black-banner-compressor.png"
    // }
    return (
        <div >
            <img width="100%" src={background} alt="" />
        </div>
        // <Box style={{ backgroundImage: `url(${background})` }}>
        //     <img sx={{width:'100%'}} src={background} alt="" />
        // </Box>
    );
};

export default WatchBanner;