import './Overlay.sass';

import backgroundImage from './assets/background.jpeg';

export const Overlay = ({ toggleMenu }) => {
    return (
        <div className='overlay' onClick={toggleMenu} >
            <div className='image' style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        </div>
    );
};
