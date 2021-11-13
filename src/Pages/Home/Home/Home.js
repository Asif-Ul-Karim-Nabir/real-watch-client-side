import React from 'react';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import WatchBanner from '../WatchBanner/WatchBanner';

const Home = () => {
    return (
        <div>
            <WatchBanner></WatchBanner>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;