import './Releases.sass';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect, useState } from 'react';
import title from './assets/title.svg';
import data from './data/releases';

export const Releases = () => {
    const [background, setBackground] = useState({ color: '', image: '' });

    useEffect(() => {
        setBackground({ color: '', image: '' });
    }, []);

    return (
        <section id='releases' className='releases' style={{ backgroundColor: background.color, backgroundImage: `url(${background.image})` }}>
            <img className='title' src={title} alt='Releases' />
            <div className='container'>
                {data.map((release, index) => (
                    <div className='release' key={index}>
                        <h1>{release.title}</h1>
                        <LazyLoadImage
                            src={release.image}
                            alt={release.title}
                            threshold={500}
                        />
                        <a href={release.link} className='button'>stream / purchase</a>
                    </div>
                ))}
            </div>
        </section >
    );
};
