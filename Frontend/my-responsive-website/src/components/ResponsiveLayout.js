import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ChevronRight, ChevronLeft } from 'lucide-react';

const ResponsiveLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [scale, setScale] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');

  // Theme colors
  const themes = {
    light: {
      primary: 'bg-blue-600',
      secondary: 'bg-gray-100',
      text: 'text-gray-800',
      hover: 'hover:bg-blue-700',
    },
    dark: {
      primary: 'bg-gray-800',
      secondary: 'bg-gray-700',
      text: 'text-white',
      hover: 'hover:bg-gray-600',
    }
  };

  const currentTheme = isDarkMode ? themes.dark : themes.light;

  // Handle responsive scaling
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 992 && width <= 1600) {
        setScale(0.9);
      } else if (width >= 700 && width <= 767) {
        setScale(0.8);
      } else if (width >= 600 && width < 700) {
        setScale(0.75);
      } else if (width <= 600) {
        setScale(0.5);
      } else {
        setScale(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Menu items with icons
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'messages', label: 'Messages', icon: '✉️' },
  ];

  return (
    <div 
      style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
      className={`${isDarkMode ? 'dark bg-gray-900' : 'bg-white'} min-h-screen`}
    >
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 h-16 ${currentTheme.primary} text-white px-4 flex items-center justify-between z-50 transition-colors duration-300`}>
        <div className="flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 ${currentTheme.hover} rounded-lg transition-all duration-300`}
          >
            <Menu size={24} />
          </button>
          <h1 className="ml-4 text-xl font-bold">My Website</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 ${currentTheme.hover} rounded-lg transition-all duration-300`}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-blue-200 transition-colors duration-300">Home</a>
            <a href="#" className="hover:text-blue-200 transition-colors duration-300">About</a>
            <a href="#" className="hover:text-blue-200 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex min-h-screen pt-16">
        {/* Left Menu */}
        <aside 
          className={`fixed left-0 top-16 h-full ${currentTheme.secondary} transition-all duration-300 ${
            isMenuOpen ? 'w-64' : 'w-0'
          } overflow-hidden`}
        >
          <div className="p-4">
            <h2 className={`font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Menu</h2>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveMenuItem(item.id)}
                    className={`w-full text-left ${
                      activeMenuItem === item.id 
                        ? `${isDarkMode ? 'bg-gray-600' : 'bg-blue-100'}`
                        : 'hover:bg-opacity-50'
                    } p-2 rounded transition-all duration-300 flex items-center space-x-2 ${
                      isDarkMode ? 'text-white hover:bg-gray-600' : 'text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className={`flex-grow transition-all duration-300 ${
          isMenuOpen ? 'ml-64' : 'ml-0'
        } p-6`}>
          <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-lg shadow p-6 transition-colors duration-300`}>
            <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
            
            {/* Responsive Image Example */}
            <div className="mb-6 overflow-hidden rounded-lg">
              <img
                src="https://plus.unsplash.com/premium_photo-1732736768092-43a010784507?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dashboard Banner"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <p className="mb-4">This is the main content area. It will adjust based on the sidebar state and screen size.</p>
            <p>Current theme: {isDarkMode ? 'Dark' : 'Light'} mode</p>
            <p>Active section: {menuItems.find(item => item.id === activeMenuItem)?.label}</p>
          </div>
        </main>

        {/* Right Panel */}
        <aside className={`w-64 ${currentTheme.secondary} p-4 hidden lg:block transition-colors duration-300`}>
          <h2 className={`font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Notifications</h2>
          <div className="space-y-4">
            <div className={`p-3 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded shadow transition-colors duration-300`}>
              <p className={isDarkMode ? 'text-white' : 'text-gray-800'}>New message received</p>
              <p className="text-xs text-gray-500">2 minutes ago</p>
            </div>
            <div className={`p-3 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded shadow transition-colors duration-300`}>
              <p className={isDarkMode ? 'text-white' : 'text-gray-800'}>System update available</p>
              <p className="text-xs text-gray-500">1 hour ago</p>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className={`${currentTheme.primary} text-white p-6 mt-auto transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 My Website. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResponsiveLayout;