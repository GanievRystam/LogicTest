import React from 'react';
import './layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <div className="layout">
          <main className="main-content">{children}</main>
        </div>
    </div>
  );
};

export default Layout;
