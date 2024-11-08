import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

function DashboardLayout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Handler to toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  // Handler to close the drawer (used when clicking outside the sidebar)
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900 flex h-full overflow-hidden">
      {/* Sidebar and Overlay Wrapper */}
      <div className={`fixed z-40 flex ${isDrawerOpen ? 'md:hidden' : ''}`}>
        {isDrawerOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={closeDrawer}
            aria-hidden="true"
          ></div>
        )}
        <Sidebar isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header toggleDrawer={toggleDrawer} />

        {/* Page Content */}
        <main className="flex-1 p-4 mt-16 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
