import { Navbar } from '../components/Navbar';
import { Overlay } from '../components/Overlay';
import { Home } from '../pages/Home';
import { Listen } from '../pages/Listen';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Overlay />
      <Home />
      <Listen />
    </div>
  )
}