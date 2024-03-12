import './Navbar.sass';
import Logo from './assets/Logo.tsx';
import Menu from './assets/Menu.tsx';

export const Navbar = () => {
    return (
        <nav>
            <div className='logo'><Logo color="white" /></div>
            <div className='menu'><Menu color="white" /></div>
        </nav>
    )
};