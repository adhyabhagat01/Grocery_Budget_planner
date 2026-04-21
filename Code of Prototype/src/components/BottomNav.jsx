import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, List, ArrowRightLeft, ReceiptText, Settings } from 'lucide-react';

const BottomNav = ({ activeTab }) => {
  const navItems = [
    { id: 'dashboard', path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'list', path: '/list', icon: List, label: 'Lists' },
    { id: 'compare', path: '/compare', icon: ArrowRightLeft, label: 'Compare' },
    { id: 'expenses', path: '/expenses', icon: ReceiptText, label: 'Expenses' },
    { id: 'settings', path: '/settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        
        return (
          <Link 
            key={item.id} 
            to={item.path} 
            className={`nav-item ${isActive ? 'active' : ''}`}
          >
            <Icon size={24} color={isActive ? 'var(--primary-green)' : 'var(--text-light)'} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
