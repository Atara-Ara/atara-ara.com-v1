import { Header } from '../components/Header';
import { Home } from '../pages/Home';
import { Releases } from '../pages/Releases';
import { Shows } from '../pages/Shows';
import { Follow } from '../pages/Follow';

export const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Releases />
      <Shows />
      <Follow />
    </div>
  )
}