import './Home.sass';
import BackgroundImage from './assets/background.jpeg';
import ContentImage from './assets/content.jpeg';
import Star from './assets/Star.tsx';
import Title from './assets/Title.tsx';

export const Home = () => {
    const background = {
        color: 'black',
        image: `url(${BackgroundImage})`
    }

    const content = {
        backgroundColor: 'black',
        textColor: 'white',
        type: 'New Single',
        title: `EVERYTHING'S OKAY`,
        message: 'Out Now',
        image: `url(${ContentImage})`,
        imageAlt: "Everything's Okay Single Cover",
        link: 'https://ampl.ink/v06yY',
    };

    return (
        <section id='home' className='home'>
            <div className='background-image' style={{ backgroundColor: background.color, backgroundImage: background.image }}></div>
            <div className='featured-content' style={{ color: content.textColor }}>
                <div className='background' style={{ backgroundColor: content.backgroundColor }}></div>
                <div className='header'>
                    <div className='type'>
                        <Star color="orange" />
                        <h2>{content.type}</h2>
                    </div>
                    <div className='title'><Title color='white' /></div>
                    <h2 className='message'>{content.message}</h2>
                </div>

                <img src={ContentImage} alt={content.imageAlt} className='image' />

                <div className='cta'>
                    <a href={content.link} className=' button'>stream / purchase</a>
                </div>
            </div>
        </section >
    )
};
