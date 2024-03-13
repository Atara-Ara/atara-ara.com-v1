import { Navbar } from '../components/Navbar';
import { Overlay } from '../components/Overlay';
import { Home } from '../pages/Home';
import { Listen } from '../pages/Listen';
import { Shows } from '../pages/Shows';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Overlay />
      <Home />
      <Listen />
      <Shows />
    </div>
  )
}