import './Shows.sass';
import { useEffect, useState } from 'react';
import backgroundImage from './assets/background.jpeg';
import title from './assets/title.svg';
import data from './data/shows.json';

interface Show {
    id: string;
    date: string;
    venue: string;
    address: string;
    time: string;
}

export const Shows = () => {
    const [shows, setShows] = useState<Show[]>([]);

    useEffect(() => {
        setShows(data.shows);
    }, []);

    return (
        <section id='shows' className='shows' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <img className='title' src={title} alt='Shows' />
            <div className='container'>
                {shows.length > 0 ? (
                    shows.map(show => (
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
