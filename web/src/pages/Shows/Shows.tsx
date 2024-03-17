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
                <div className='show'>
                    <div className='left'>
                        <div className='date-left'>
                            <p className='month'>Mar</p>
                            <p className='year'>2024</p>
                        </div>
                        <div className='date-right'>
                            <p>07</p>
                        </div>
                    </div>
                    <div className='info'>
                        <h1 className='venue'>Venue Name</h1>
                        <p className='address'>Venue Address, CA, 92831</p>
                    </div>
                    <div className='right'>
                    </div>
                </div>


                <div className='show'>
                    <div className='left'>
                        <div className='date-left'>
                            <p className='month'>Mar</p>
                            <p className='year'>2024</p>
                        </div>
                        <div className='date-right'>
                            <p>07</p>
                        </div>
                    </div>
                    <div className='info'>
                        <h1 className='venue'>Venue Name</h1>
                        <p className='address'>Venue Address, CA, 92831</p>
                    </div>
                    <div className='right'>
                    </div>
                </div>

            </div>
        </section>
    )
};
