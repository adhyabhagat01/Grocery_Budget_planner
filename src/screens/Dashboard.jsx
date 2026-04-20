import React from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { AlertTriangle, ShoppingCart, Target, Coffee, Search, Trash2 } from 'lucide-react';

const Dashboard = () => {
  const expenses = [
    { id: 1, store: 'Walmart', category: 'Groceries', time: '2h ago', amount: '$45.20', icon: ShoppingCart, color: '#3b82f6' },
    { id: 2, store: 'Target', category: 'Household', time: 'Today', amount: '$12.50', icon: Target, color: '#ef4444' },
    { id: 3, store: 'Whole Foods', category: 'Bakery', time: 'Yesterday', amount: '$28.40', icon: ShoppingCart, color: '#f59e0b' },
    { id: 4, store: 'Starbucks', category: 'Beverages', time: 'Yesterday', amount: '$8.15', icon: Coffee, color: '#10b981' },
    { id: 5, store: 'Aldi', category: 'Groceries', time: '2 days ago', amount: '$34.90', icon: ShoppingCart, color: '#8b5cf6' },
  ];

  return (
    <>
      <Header />
      <main className="content-area" style={{ padding: '0 20px' }}>
        <div className="mb-4">
          <h2 style={{ fontSize: '22px', color: 'var(--text-dark)', marginBottom: '4px' }}>Hi, Alex Chen!</h2>
          <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Ready to master your pantry today?</p>
        </div>

        {/* Alert */}
        <div style={{ backgroundColor: '#fff7ed', borderRadius: '12px', padding: '12px 16px', display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '24px' }}>
          <AlertTriangle color="#ea580c" size={20} style={{ marginTop: '2px' }} />
          <div>
            <h4 style={{ color: '#ea580c', fontSize: '14px', fontWeight: '600', marginBottom: '2px' }}>Budget Alert</h4>
            <p style={{ color: '#9a3412', fontSize: '13px' }}>You've reached 80% of your monthly budget!</p>
          </div>
        </div>

        {/* Budget Card */}
        <div className="card mb-4">
          <div className="flex justify-between items-center mb-2">
            <span style={{ fontSize: '12px', color: 'var(--text-gray)', fontWeight: '600', textTransform: 'uppercase' }}>Monthly Budget</span>
            <span style={{ fontSize: '12px', color: 'var(--text-gray)' }}>Remaining</span>
          </div>
          <div className="flex justify-between items-end mb-4">
            <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--text-dark)' }}>$400.00</div>
            <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary-green)' }}>$80.00</div>
          </div>
          <div style={{ height: '8px', backgroundColor: 'var(--bg-color)', borderRadius: '4px', overflow: 'hidden', marginBottom: '8px' }}>
            <div style={{ height: '100%', width: '80%', backgroundColor: 'var(--primary-green)', borderRadius: '4px' }}></div>
          </div>
          <div className="flex justify-between items-center">
            <span style={{ fontSize: '12px', color: 'var(--text-gray)' }}>Spent: $320.00</span>
            <span style={{ fontSize: '12px', color: 'var(--text-gray)' }}>80%</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-3 mb-4">
          <div className="card flex-col flex" style={{ flex: 1, padding: '16px 12px' }}>
            <Trash2 size={24} color="#3b82f6" style={{ marginBottom: '8px' }} />
            <span style={{ fontSize: '20px', fontWeight: '700' }}>15</span>
            <span style={{ fontSize: '12px', color: 'var(--text-gray)' }}>Total Items</span>
          </div>
          <div className="card flex-col flex" style={{ flex: 1, padding: '16px 12px', backgroundColor: '#fff5f5' }}>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444', opacity: 0.3 }}></div>
            </div>
            <span style={{ fontSize: '20px', fontWeight: '700' }}>3 Items</span>
            <span style={{ fontSize: '12px', color: '#ef4444' }}>Low Stock</span>
          </div>
          <div className="card flex-col flex" style={{ flex: 1, padding: '16px 12px', backgroundColor: '#f0fdf4' }}>
            <Search size={24} color="var(--primary-green)" style={{ marginBottom: '8px' }} />
            <span style={{ fontSize: '20px', fontWeight: '700' }}>$4.50</span>
            <span style={{ fontSize: '12px', color: 'var(--primary-green)' }}>Avg Cost</span>
          </div>
        </div>

        {/* Spending Analysis */}
        <div className="mb-4">
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Spending Analysis</h3>
          <div className="flex items-center gap-4">
            <div style={{ 
              width: '120px', height: '120px', borderRadius: '50%', 
              background: 'conic-gradient(#00a651 0% 35%, #3b82f6 35% 55%, #ef4444 55% 70%, #f59e0b 70% 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--bg-color)', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '10px', color: 'var(--text-gray)' }}>Top Category</span>
                <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--primary-green)' }}>Produce</span>
              </div>
            </div>
            <div className="flex-col gap-2 flex" style={{ flex: 1 }}>
              {[
                { label: 'Fruits & Veg', color: '#00a651', pct: '35%' },
                { label: 'Dairy', color: '#3b82f6', pct: '20%' },
                { label: 'Meat', color: '#ef4444', pct: '15%' },
                { label: 'Others', color: '#f59e0b', pct: '30%' }
              ].map(item => (
                <div key={item.label} className="flex justify-between items-center" style={{ fontSize: '12px' }}>
                  <div className="flex items-center gap-2">
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.color }}></div>
                    <span style={{ color: 'var(--text-gray)' }}>{item.label}</span>
                  </div>
                  <span style={{ fontWeight: '600' }}>{item.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Expenses */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Recent Expenses</h3>
            <span style={{ fontSize: '12px', color: 'var(--primary-green)', fontWeight: '600', backgroundColor: '#e6f6ec', padding: '4px 12px', borderRadius: '12px' }}>View All</span>
          </div>
          
          <div className="flex-col gap-3 flex">
            {expenses.map(exp => {
              const Icon = exp.icon;
              return (
                <div key={exp.id} className="card flex items-center justify-between" style={{ padding: '12px' }}>
                  <div className="flex items-center gap-3">
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: `${exp.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={20} color={exp.color} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)' }}>{exp.store}</h4>
                      <p style={{ fontSize: '12px', color: 'var(--text-gray)' }}>{exp.category} • {exp.time}</p>
                    </div>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>{exp.amount}</div>
                </div>
              )
            })}
          </div>
        </div>
        
      </main>

      {/* FAB */}
      <button style={{
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: 'var(--primary-green)',
        color: 'white',
        border: 'none',
        boxShadow: '0 4px 12px rgba(0, 166, 81, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 90
      }}>
        <ShoppingCart size={24} />
      </button>

      <BottomNav activeTab="dashboard" />
    </>
  );
};

export default Dashboard;
