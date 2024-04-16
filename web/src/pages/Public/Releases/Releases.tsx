import './Releases.sass';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect, useState } from 'react';
import title from './assets/title.svg';

import config from '../../../../../config';

export const Releases = () => {
    const [background, setBackground] = useState({ color: '', image: '' });
    const [releases, setReleases] = useState([]);

    useEffect(() => {
        fetch(`${config.BACKEND_URL}/releases`)
            .then(response => response.json())
            .then(data => {
                setBackground({ ...background, image: `${config.BACKEND_URL}${data.background[0].image}` });
                setReleases(data.releases);
            })
            .catch(error => console.error('Error fetching releases content:', error));
    }, []);

    return (
        <section id='releases' className='releases' style={{ backgroundColor: background.color, backgroundImage: `url(${background.image})` }}>
            <img className='title' src={title} alt='Releases' />
            <div className='container'>
                {releases.map((release, index) => (
                    <div className='release' key={index}>
                        <h1>{release.title}</h1>
                        <LazyLoadImage
                            src={config.BACKEND_URL + '/images/releases/' + release.id + '.jpeg'}
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
