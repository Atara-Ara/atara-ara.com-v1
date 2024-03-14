import './Shows.sass';
import backgroundImage from './assets/background.jpeg';
import title from './assets/title.svg';

export const Shows = () => {
    const background = {
        color: 'orange',
        image: `url(${backgroundImage})`
    }

    return (
        <section id='shows' className='shows' style={{ backgroundColor: background.color, backgroundImage: background.image }}>
            <img className='title' src={title} alt='Shows' />
            <div className='container'>
                <div className='release'>
                    <h1>test</h1>
                    <p>test est este</p>
                </div>
                <div className='release'>
                    <h1>test</h1>
                    <p>test est este</p>
                </div>
            </div>
        </section>
    )
};
