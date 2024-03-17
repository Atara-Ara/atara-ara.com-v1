import './Releases.sass';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import backgroundImage from './assets/background.jpeg';
import title from './assets/title.svg';
import { useEffect, useState } from 'react';
import { config } from '../../app/config.js';

export const Releases = () => {
    const background = {
        color: 'black',
        image: `url(${backgroundImage})`
    };

    const [releases, setReleases] = useState([]);

    useEffect(() => {
        fetch(`${config.backendUrl}/releases`)
            .then(response => response.json())
            .then(data => setReleases(data.releases))
            .catch(error => console.error('Error fetching releases:', error));
    }, []);

    return (
        <section id='releases' className='releases' style={{ backgroundColor: background.color, backgroundImage: background.image }}>
            <img className='title' src={title} alt='Releases' />
            <div className='container'>
                {releases.map((release, index) => (
                    <div className='release' key={index}>
                        <h1>{release.title}</h1>
                        <LazyLoadImage
                            src={config.backendUrl + '/images/releases/' + release.id + '.jpeg'}
                            alt={release.title}
                            threshold={500}
                        />
                        <a href={release.link} className='button'>stream / purchase</a>
                    </div>
                ))}
            </div>
        </section>
    );
};
