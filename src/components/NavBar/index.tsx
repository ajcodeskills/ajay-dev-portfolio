import { twMerge } from 'tailwind-merge';

import { NAV_BAR } from 'constants/home.constants';
import { GitHubIcon } from 'components/shared/Icons';
import { TSelectedNavItem } from 'types/home.type';

type TNavBarProps = {
  selectedNavItem: TSelectedNavItem;
  handleNavClick: (item: TSelectedNavItem) => void;
};
const NavBar = ({ selectedNavItem, handleNavClick }: TNavBarProps) => {
  return (
    <div className="flex items-center justify-between px-10 py-2 shadow shadow-gray-200">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">Ajay Kumar</h1>
      </div>
      <div className="flex items-center gap-10">
        {NAV_BAR.map((item, index) => (
          <button
            className="block w-16 cursor-pointer border-none"
            onClick={() => handleNavClick(item.id)}
          >
            <p
              key={`nav-item-${index}`}
              className={twMerge(
                'text-base leading-7 hover:text-lg hover:font-semibold',
                selectedNavItem === item.id
                  ? 'font-semibold text-blue-500 underline'
                  : 'text-gray-500',
              )}
            >
              {item.title}
            </p>
          </button>
        ))}
      </div>
      <div className="flex items-center gap-10">
        <button className="cursor-pointer rounded-sm border-none bg-emerald-400 px-3 py-1.5 text-white hover:bg-emerald-500">
          Download CV
        </button>
        <div className="flex cursor-pointer items-center gap-2">
          <GitHubIcon className="h-6 w-6 fill-gray-950" />
          <p className="text-gray-500">GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
