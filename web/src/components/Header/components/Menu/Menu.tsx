import './Menu.sass';

import { useEffect } from 'react';

export const Menu = ({ toggleMenu, isMenuVisible }) => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            toggleMenu();
        }
    };



    useEffect(() => {
        if (isMenuVisible) {
            console.log('(Menu.tsx) Menu is visible');
        } else {
            console.log('(Menu.tsx) Menu is hidden');
        }
    }, [isMenuVisible]);




    return (
        <div className='menu'>
            <ul>
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
        </div >
    );
};
