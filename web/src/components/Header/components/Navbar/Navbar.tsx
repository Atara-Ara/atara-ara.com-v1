import './Navbar.sass';
import { useEffect, useState } from 'react';
import Logo from './assets/Logo';
import MenuIcon from './assets/Menu';
import CloseIcon from './assets/Close';

interface NavbarProps {
    toggleMenu: () => void;
    isMenuVisible: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleMenu, isMenuVisible }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav>
            <div>
                <span className='logo'><Logo color="white" /></span>
                {windowWidth <= 768 ? (
                    <span className='menu-button' onClick={toggleMenu}>
                        {isMenuVisible ? <CloseIcon color="white" /> : <MenuIcon color="white" />}
                    </span>
                ) : (
                    <ul className='desktop'>
                        <li onClick={() => scrollToSection('home')}>
                            <p>home</p>
                        </li>
                        <li onClick={() => scrollToSection('releases')}>
                            <p>releases</p>
                        </li>
                        <li onClick={() => scrollToSection('shows')}>
                            <p>shows</p>
                        </li>
                        <li onClick={() => scrollToSection('follow')}>
                            <p>follow</p>
                        </li>
                    </ul>
                )}
            </div>
        </nav >
    );
};
