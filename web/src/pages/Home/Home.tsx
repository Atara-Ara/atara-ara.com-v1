import './Home.sass';
import { useEffect, useState } from 'react';
import data from './data/home.json';
import backgroundImage from './assets/background.jpeg';
import headerImage from './assets/header.svg';
import contentImage from './assets/content.jpeg';

export const Home = () => {
    const [background, setBackground] = useState({ color: '', image: '' });
    const [content, setContent] = useState({
        backgroundColor: 'black',
        header: '',
        headerAlt: '',
        image: '',
        imageAlt: '',
        link: '',
    });

    useEffect(() => {
        setBackground({ ...background });
        setContent({
            ...content,
            backgroundColor: data.content[0].backgroundColor,
            headerAlt: data.content[0].headerAlt,
            imageAlt: data.content[0].imageAlt,
            link: data.content[0].link,
        });
    }, []);

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
};
