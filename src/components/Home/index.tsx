import { useState } from 'react';

import About from 'components/About';
import NavBar from 'components/NavBar';
import { TSelectedNavItem } from 'types/home.type';

import Introduction from './Introduction';

const Home = () => {
  const [selectedNavItem, setSelectedNavItem] =
    useState<TSelectedNavItem>('home');
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <NavBar
        selectedNavItem={selectedNavItem}
        handleNavClick={setSelectedNavItem}
      />
      <div className="h-full flex-1 overflow-auto">
        <Introduction />
        <About />
      </div>
    </div>
  );
};

export default Home;
