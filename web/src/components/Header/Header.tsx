import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { TopVignette } from './components/TopVignette/TopVignette';
import { Menu } from './components/Menu';
import { Overlay } from './components/Overlay';

export const Header = () => {
    const [isMenuVisible, setMenuVisibility] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        if (isMenuVisible && windowWidth > 768) {
            setMenuVisibility(false);
            document.body.style.overflow = 'auto';
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuVisible, windowWidth]);

    const toggleMenu = () => {
        if (isMenuVisible && windowWidth > 768) {
            setMenuVisibility(false);
            document.body.style.overflow = 'auto';
        } else {
            setMenuVisibility(!isMenuVisible);
            document.body.style.overflow = isMenuVisible ? 'auto' : 'hidden';
        }
    };

    return (
        <header>
            <div>
                <Navbar toggleMenu={toggleMenu} isMenuVisible={isMenuVisible} />
                <TopVignette />
            </div>

            {isMenuVisible && (
                <div>
                    <Menu toggleMenu={toggleMenu} />
                    <Overlay toggleMenu={toggleMenu} />
                </div>
            )}
        </header>
    )
};