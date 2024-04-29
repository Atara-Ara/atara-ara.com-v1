import './Menu.sass';

interface MenuProps {
    toggleMenu: () => void;
}

export const Menu: React.FC<MenuProps> = ({ toggleMenu }) => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            toggleMenu();
        }
    };

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
