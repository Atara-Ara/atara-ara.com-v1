import './Home.sass';
import BackgroundImage from './assets/background.jpeg';
import ContentImage from './assets/content.jpeg';

export const Home = () => {
    const background = {
        color: '#3579b8',
        image: `url(${BackgroundImage})`
    }

    const content = {
        type: 'New Single',
        title: `Everything's Okay`,
        message: 'OUT NOW',
        image: `url(${ContentImage})`,
        link: 'https://ampl.ink/v06yY',
    };

    return (
        <section id='home' className='home'>
            <div className='background-image' style={{ backgroundColor: background.color, backgroundImage: background.image }}></div>
            <div className='featured-content'>
                <div className='header'>
                    <h2 className='type'>{content.type}</h2>
                    <h2 className='title'>{content.title}</h2>
                    <h2 className='message'>{content.message}</h2>
                </div>

                <div className='image' style={{ backgroundImage: content.image }}></div>

                <div className='cta'>
                    <a href={content.link} className=' button'>Stream / Purchase</a>
                </div>
            </div>
        </section >
    )
};
