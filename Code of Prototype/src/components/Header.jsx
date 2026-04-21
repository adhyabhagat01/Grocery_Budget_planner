import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app-header">
      <h1>
        <Menu size={20} className="text-primary-green" style={{ color: 'var(--primary-green)' }} />
        Culinary Curator
      </h1>
      <Link to="/settings">
        <div className="avatar flex items-center justify-center">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
            alt="User Avatar" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </Link>
    </header>
  );
};

export default Header;
