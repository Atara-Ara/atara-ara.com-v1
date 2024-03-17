import './Home.sass';
import { config } from '../../app/config.js';
import { useEffect, useState } from 'react';

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
        fetch(`${config.backendUrl}/home`)
            .then(response => response.json())
            .then(data => {
                setBackground({ ...background, image: `${config.backendUrl}${data.background[0].image}` });
                setContent({
                    ...content,
                    backgroundColor: data.content[0].backgroundColor,
                    header: `${config.backendUrl}${data.content[0].header}`,
                    headerAlt: data.content[0].headerAlt,
                    image: `${config.backendUrl}${data.content[0].image}`,
                    imageAlt: data.content[0].imageAlt,
                    link: data.content[0].link,
                });
            })
            .catch(error => console.error('Error fetching home content:', error));
    }, []);

    return (
        <section id='home' className='home' style={{ backgroundColor: background.color, backgroundImage: `url(${background.image})` }}>
            <div className='featured-content'>
                <div className='background' style={{ backgroundColor: content.backgroundColor }}></div>
                <img className='header' src={content.header} alt={content.headerAlt} />
                <img className='image' src={content.image} alt={content.imageAlt} />
                <a className='cta' href={content.link}>stream / purchase</a>
            </div>
        </section>
    );
};
