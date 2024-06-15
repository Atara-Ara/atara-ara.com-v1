import './Shows.sass';
import { useState } from 'react';
import backgroundImage from './assets/background.jpeg';
import title from './assets/title.svg';
import data from './data/shows.json';
import LocationIcon from './assets/location.svg';

interface Show {
    id: string;
    date: string;
    venue: string;
    city: string;
    tickets: string;
    gmaps: string;
}

export const Shows = () => {
    const [shows] = useState<Show[]>(data.shows);

    return (
        <section id='shows' className='shows' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <img className='title' src={title} alt='Shows' />

            <div className='container'>
                {shows.length > 0 ? (
                    shows.map(show => (
                        <div className='show' key={show.id}>
                            <div className='left'>
                                <p className='date'>
                                    <span className='month'>{new Date(show.date).toLocaleString('default', { month: 'short' })} </span>
                                    <span>{new Date(show.date).getDate()}, </span>
                                    <span className='year'>{new Date(show.date).getFullYear()}</span>
                                </p>
                                <div className='venue'>
                                    <a href={show.gmaps} target='_blank' rel='noreferrer'>
                                        <img className='location-icon' src={LocationIcon} alt='Location via Google Maps' />
                                    </a>
                                    {show.venue}
                                </div>
                            </div>

                            <div className='center'>
                                <p className='city'>{show.city}</p>
                            </div>

                            <div className='right'>
                                <a href={show.tickets} target='_blank' rel='noreferrer' className='tickets'>
                                    <p>Tickets</p>
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        <p>No upcoming shows at the moment</p>
                    </div>
                )}
            </div>
        </section>
    );
};
