import React, { useState } from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { ChevronRight, Bell, Lock, Mail, Shield, Plus, Edit2, Trash2 } from 'lucide-react';

const Settings = () => {
  const [alertsEnabled, setAlertsEnabled] = useState(true);

  return (
    <>
      <Header />
      <main className="content-area" style={{ padding: '0 20px' }}>
        
        {/* Profile Card */}
        <div className="card flex items-center gap-4 mb-6">
          <div className="avatar" style={{ width: '60px', height: '60px' }}>
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
              alt="Alex Chen" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '2px' }}>Alex Chen</h2>
            <p style={{ fontSize: '12px', color: 'var(--text-gray)', marginBottom: '6px' }}>alex@university.edu</p>
            <span style={{ fontSize: '10px', fontWeight: '700', color: 'var(--primary-green)', backgroundColor: '#e6f6ec', padding: '2px 8px', borderRadius: '12px' }}>STUDENT PLAN</span>
          </div>
        </div>

        {/* Budget Card */}
        <div className="card mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div style={{ fontSize: '10px', color: 'var(--text-gray)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '4px' }}>CURRENT MONTHLY BUDGET</div>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--primary-green)' }}>$400.00</div>
            </div>
            <button style={{ backgroundColor: 'var(--primary-green)', color: 'white', border: 'none', borderRadius: '20px', padding: '4px 12px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>
              Edit
            </button>
          </div>
          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="flex items-center gap-2" style={{ fontSize: '14px', color: 'var(--text-dark)' }}>
              <span role="img" aria-label="history">⏱️</span> Budget History
            </div>
            <ChevronRight size={16} color="var(--text-light)" />
          </div>
        </div>

        {/* Alert Settings */}
        <div className="mb-6">
          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>Alert Settings</h3>
          <div className="card">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <Bell size={20} color="var(--primary-green)" />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>Budget Alerts</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-gray)' }}>Get notified when spending is high</div>
                </div>
              </div>
              <div 
                onClick={() => setAlertsEnabled(!alertsEnabled)}
                style={{ 
                  width: '44px', height: '24px', 
                  backgroundColor: alertsEnabled ? 'var(--primary-green)' : '#cbd5e1', 
                  borderRadius: '12px', 
                  position: 'relative', 
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                <div style={{ 
                  width: '20px', height: '20px', 
                  backgroundColor: 'white', 
                  borderRadius: '50%', 
                  position: 'absolute', 
                  top: '2px', 
                  left: alertsEnabled ? '22px' : '2px', 
                  transition: 'left 0.2s',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span style={{ fontSize: '12px', fontWeight: '600' }}>Threshold</span>
                <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--primary-green)' }}>80%</span>
              </div>
              <input type="range" min="0" max="100" defaultValue="80" style={{ width: '100%', accentColor: 'var(--primary-green)', marginBottom: '8px' }} />
              <div style={{ fontSize: '11px', color: 'var(--text-gray)', textAlign: 'center' }}>We'll alert you once you hit $320.00</div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-12" style={{ marginBottom: '12px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600' }}>Categories</h3>
            <div className="flex items-center gap-1" style={{ fontSize: '12px', color: 'var(--primary-green)', fontWeight: '600', cursor: 'pointer' }}>
              <Plus size={14} /> Add New
            </div>
          </div>
          <div className="card flex-col gap-4 flex">
            {[
              { id: 1, name: 'Fruits & Vegetables', color: '#ef4444' },
              { id: 2, name: 'Dairy & Eggs', color: '#3b82f6' },
              { id: 3, name: 'Pantry Staples', color: '#f59e0b' }
            ].map(cat => (
              <div key={cat.id} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: cat.color }}></div>
                  <span style={{ fontSize: '14px' }}>{cat.name}</span>
                </div>
                <div className="flex gap-2">
                  <Edit2 size={14} color="var(--text-light)" style={{ cursor: 'pointer' }} />
                  <Trash2 size={14} color="var(--text-light)" style={{ cursor: 'pointer' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Account & Security */}
        <div className="mb-6">
          <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>Account & Security</h3>
          <div className="card flex-col flex">
            {[
              { icon: Lock, label: 'Change Password' },
              { icon: Mail, label: 'Notifications' },
              { icon: Shield, label: 'Privacy Policy' }
            ].map((item, idx, arr) => (
              <div key={item.label} className="flex justify-between items-center" style={{ padding: '12px 0', borderBottom: idx !== arr.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                <div className="flex items-center gap-3">
                  <item.icon size={18} color="var(--text-gray)" />
                  <span style={{ fontSize: '14px' }}>{item.label}</span>
                </div>
                <ChevronRight size={16} color="var(--text-light)" />
              </div>
            ))}
          </div>
        </div>

      </main>
      <BottomNav activeTab="settings" />
    </>
  );
};

export default Settings;
