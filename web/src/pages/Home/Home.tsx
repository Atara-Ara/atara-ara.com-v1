import './Home.sass';
import backgroundImage from './assets/background.jpeg';
import headerImage from './assets/header.svg';
import contentImage from './assets/content.jpeg'

export const Home = () => {
    const background = {
        color: 'black',
        image: `url(${backgroundImage})`
    }

    const content = {
        backgroundColor: 'black',
        header: headerImage,
        headerAlt: "New Single, Everything's Okay. Out Now!",
        image: contentImage,
        imageAlt: "Artwork for the single, Everything's Okay.",
        link: 'https://ampl.ink/v06yY',
    };

    return (
        <section id='home' className='home' style={{ backgroundColor: background.color, backgroundImage: background.image }}>
            <div className='featured-content'>
                <div className='background' style={{ backgroundColor: content.backgroundColor }}></div>

                <img className='header' src={content.header} alt={content.imageAlt} />
                <img className='image' src={content.image} alt={content.imageAlt} />

                <a className='cta' href={content.link}>stream / purchase</a>
            </div>
        </section >
    )
};
