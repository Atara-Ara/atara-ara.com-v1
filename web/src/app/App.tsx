import React from 'react';
import { Navbar } from '../components/Navbar';
import { Home } from '../pages/Home';
import { About } from '../pages/About';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}