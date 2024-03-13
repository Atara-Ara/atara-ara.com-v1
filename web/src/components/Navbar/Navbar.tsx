import './Navbar.sass';
import Logo from './assets/Logo.tsx';
import Menu from './assets/Menu.tsx';

export const Navbar = () => {
    return (
        <div>
            <nav>
                <span className='logo'><Logo color="white" /></span>
                <span className='menu'><Menu color="white" /></span>
            </nav>
            <div className='darken'></div>
        </div>

    )
};