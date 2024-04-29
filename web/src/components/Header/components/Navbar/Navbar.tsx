import './Navbar.sass';
import Logo from './assets/Logo';
import MenuIcon from './assets/Menu';
import CloseIcon from './assets/Close';

export const Navbar = ({ toggleMenu, isMenuVisible }) => {
    return (
        <nav>
            <span className='logo'><Logo color="white" /></span>
            <span className='menu-button' onClick={toggleMenu}>
                {isMenuVisible ? <CloseIcon color="white" /> : <MenuIcon color="white" />}
            </span>
        </nav>
    )
};
