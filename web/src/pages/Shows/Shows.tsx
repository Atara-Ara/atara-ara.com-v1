import './Shows.sass';
import { useState } from 'react';
import backgroundImage from './assets/background.jpeg';
import title from './assets/title.svg';
import data from './data/shows.json';
import LocationIcon from './assets/location.svg';
import { parseISO, format } from 'date-fns';

interface Show {
    id: string;
    date: string;
    venue: string;
    city: string;
    tickets: string;
    gmaps: string;
    time: string;
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
                                    <span className='month'>{format(parseISO(show.date), 'MMM')} </span>
                                    <span>{format(parseISO(show.date), 'd')}, </span>
                                    <span className='year'>{format(parseISO(show.date), 'yyyy')}</span>
                                    <span className='time'> @ {show.time}</span>
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
