import React from 'react';
import Products from '../Products/Products';
import WatchBanner from '../WatchBanner/WatchBanner';

const Home = () => {
    return (
        <div>
            <WatchBanner></WatchBanner>
            <Products></Products>
        </div>
    );
};

export default Home;