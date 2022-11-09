import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ExtraPage from '../ExtraPage/ExtraPage';
import PageTwo from '../PageTwo/PageTwo';
import Services from '../Services/Services';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ExtraPage></ExtraPage>
            <PageTwo></PageTwo>
        </div>
    );
};

export default Home;