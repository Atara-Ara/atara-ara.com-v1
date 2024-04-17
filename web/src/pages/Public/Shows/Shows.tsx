import './Shows.sass';
import { useEffect, useState } from 'react';
import backgroundImage from './assets/background.jpeg';
import title from './assets/title.svg';

import config from '../../../../../config';

export const Shows = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetch(`${config.BACKEND_URL}/shows`)
            .then(response => response.json())
            .then(data => {
                setShows(data.shows);
            })
            .catch(error => console.error('Error fetching show data:', error));
    }, []);

    return (
        <section id='shows' className='shows' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <img className='title' src={title} alt='Shows' />
            <div className='container'>
                {shows.map(show => (
                    <div className='show' key={show.id}>
                        <div className='left'>
                            <div className='date-left'>
                                <p className='month'>{new Date(show.date).toLocaleString('default', { month: 'short' })}</p>
                                <p className='year'>{new Date(show.date).getFullYear()}</p>
                            </div>
                            <div className='date-right'>
                                <p>{new Date(show.date).getDate()}</p>
                            </div>
                        </div>
                        <div className='info'>
                            <h1 className='venue'>{show.venue}</h1>
                            <p className='address'>{show.address}</p>
                        </div>
                        <div className='right'>
                            <p>{show.time}</p>
                            {/* Add a link here */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
