import './Overlay.sass';
import backgroundImage from './assets/background.jpeg';

interface OverlayProps {
    toggleMenu: () => void;
}

export const Overlay: React.FC<OverlayProps> = ({ toggleMenu }) => {
    return (
        <div className='overlay' onClick={toggleMenu}>
            <div className='image' style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        </div>
    );
};
