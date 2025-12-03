'use client';

import NavbarHeader from './component/NavbarHeader';
import TopHeader from './component/TopHeader';

const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <TopHeader />
      <NavbarHeader />
    </div>
  );
};

export default Header;
