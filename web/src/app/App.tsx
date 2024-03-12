import React from 'react';
import { Navbar } from '../components/Navbar';
import { Home } from '../pages/Home';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  )
}