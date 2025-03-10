import React from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Values from './components/Values';
import WhyChoose from './components/WhyChoose';
import Journey from './components/Journey';
import Award from './components/Award';

const Page = () => {
    return (
        <div>
            <Hero/>
            <Story/>
            <Values/>
            <WhyChoose/>
            <Journey/>
            <Award/>
        </div>
    );
}

export default Page;
