import './Releases.sass';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState } from 'react';
import title from './assets/title.svg';
import backgroundImage from './assets/background.jpeg';
import data from './data/releases';


export const Releases = () => {
    const [background] = useState({ color: 'black' });

    return (
        <section id='releases' className='releases' style={{ backgroundColor: background.color, backgroundImage: `url(${backgroundImage})` }}>
            <img className='title' src={title} alt='Releases' />
            <div className='container'>
                {data.map((release, index) => (
                    <div className='release' key={index}>
                        <a href={release.link} target='_blank' rel='noopener noreferrer'>
                            <LazyLoadImage
                                src={release.image}
                                alt={release.title}
                                threshold={500}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </section >
    );
};
