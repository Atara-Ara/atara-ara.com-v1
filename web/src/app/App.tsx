import { Navbar } from '../components/Navbar';
import { Overlay } from '../components/Overlay';
import { Home } from '../pages/Home';
import { Releases } from '../pages/Releases';
import { Shows } from '../pages/Shows';
import { Follow } from '../pages/Follow';

export const App = () => {
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