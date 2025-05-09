import { useState } from 'react';

import NavBar from 'components/NavBar';
import { TSelectedNavItem } from 'types/home.type';

import Introduction from './Introduction';

const Home = () => {
  const [selectedNavItem, setSelectedNavItem] =
    useState<TSelectedNavItem>('home');
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <NavBar
        selectedNavItem={selectedNavItem}
        handleNavClick={setSelectedNavItem}
      />
      <div className="h-full flex-1 overflow-auto">
        <Introduction />
      </div>
    </div>
  );
};

export default Home;
