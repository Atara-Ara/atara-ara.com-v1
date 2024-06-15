import './Home.sass';
import { useState } from 'react';
// import data from './data/home.json';
import backgroundImage from './assets/background.jpeg';
// import headerImage from './assets/header.svg';
import contentImage from './assets/content.jpeg';

export const Home = () => {
    const [background] = useState({ color: 'black' });
    {/* const [background] = useState(data.background[0]); 
    const [content] = useState({
        backgroundColor: data.content[0].backgroundColor,
        headerAlt: data.content[0].headerAlt,
        imageAlt: data.content[0].imageAlt,
        link: data.content[0].link,
    });

    return (
        <section id='home' className='home' style={{ backgroundColor: background.color, backgroundImage: `url(${backgroundImage})` }}>
            <div className='featured-content'>
                <div className='background' style={{ backgroundColor: content.backgroundColor }}></div>
                <img className='header' src={headerImage} alt={content.headerAlt} />
                <img className='image' src={contentImage} alt={content.imageAlt} />
                <a className='cta' href={content.link}>stream / purchase</a>
            </div>
        </section>
    );
    */}

    return (
        <section id='home' className='home' style={{ backgroundColor: background.color, backgroundImage: `url(${backgroundImage})` }}>
            <div className='featured-content'>
                <div className='background' style={{ backgroundColor: 'black' }}></div>
                <img className='image' src={contentImage} alt='content' />
            </div>
        </section>
    );
};
