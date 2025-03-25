import React from 'react';

const Header = () => {
  return (
    <header className="bg-ikea-blue text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold uppercase mr-10">IKEA Room Planner</div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="hover:text-ikea-yellow transition-colors">Home</a>
              <a href="/room-planner" className="hover:text-ikea-yellow transition-colors">Room Planner</a>
              <a href="/design-principles" className="hover:text-ikea-yellow transition-colors">Design Principles</a>
              <a href="/help" className="hover:text-ikea-yellow transition-colors">Help & FAQ</a>
            </nav>
          </div>
          <div>
            <button className="bg-ikea-yellow text-black px-4 py-2 rounded-ikea hover:bg-yellow-500 transition-colors">
              Start Planning
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
