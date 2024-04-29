import { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { TopVignette } from './components/TopVignette/TopVignette';
import { Menu } from './components/Menu/Menu';
import { Overlay } from './components/Overlay/Overlay';

export const Header = () => {
    const [isMenuVisible, setMenuVisibility] = useState(false);

    const toggleMenu = () => {
        setMenuVisibility(!isMenuVisible);
        document.body.style.overflow = isMenuVisible ? 'auto' : 'hidden';
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