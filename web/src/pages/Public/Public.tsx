import { Navbar } from '../../components/Navbar';
import { Overlay } from '../../components/Overlay';
import { Home } from './Home';
import { Releases } from './Releases';
import { Shows } from './Shows';
import { Follow } from './Follow';

export const Public = () => {
    return (
        <div>
            <Navbar />
            <Overlay />
            <Home />
            <Releases />
            <Shows />
            <Follow />
        </div>
    )
}