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
            <h4>Select event for more details.</h4>
            <div className='container'>
                {shows.length > 0 ? (
                    shows.map(show => (
                        <a href={show.tickets} target='_blank' rel='noreferrer'>
                            <div className='show' key={show.id}>
                                <div className='left-container'>
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
                                        <div className='row-1'>
                                            <h1 className='venue'>{show.venue}</h1>
                                            <a href={show.gmaps} target='_blank' rel='noreferrer'>
                                                <img className='location-icon' src={LocationIcon} alt='Google Maps' />
                                            </a>
                                        </div>
                                        <p className='city'>{show.city}</p>
                                    </div>
                                </div>

                                {/* 
                                <a href={show.tickets} target='_blank' rel='noreferrer' className='tickets'>
                                    <p>Tickets</p>
                                </a> 
                            */}
                            </div>
                        </a>
                    ))

                ) : (
                    <div>
                        <p>No upcoming shows at the moment</p>
                    </div>
                )}
            </div>
        </section >
    );
};
