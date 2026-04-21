import React, { useState } from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { Minus, Plus, Bell } from 'lucide-react';

const GroceryList = () => {
  const [quantity, setQuantity] = useState(1);
  const [isUrgent, setIsUrgent] = useState(true);

  return (
    <>
      <Header />
      <main className="content-area relative" style={{ padding: '0 20px', overflow: 'hidden' }}>
        
        {/* Blurred background content (Dashboard simulation) */}
        <div style={{ filter: 'blur(4px)', opacity: 0.5, pointerEvents: 'none', userSelect: 'none' }}>
          <div className="mb-4">
            <h2 style={{ fontSize: '22px', color: 'var(--text-dark)', marginBottom: '4px' }}>Hi, Alex Chen!</h2>
            <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Ready to master your pantry today?</p>
          </div>
          <div style={{ backgroundColor: '#fff7ed', borderRadius: '12px', padding: '12px 16px', display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '24px' }}>
            <div>
              <h4 style={{ color: '#ea580c', fontSize: '14px', fontWeight: '600' }}>Budget Alert</h4>
              <p style={{ color: '#9a3412', fontSize: '13px' }}>You've reached 80% of your monthly budget!</p>
            </div>
          </div>
          <div className="card mb-4" style={{ height: '150px' }}></div>
        </div>

        {/* Overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 10 }}></div>

        {/* Bottom Sheet Modal */}
        <div style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          backgroundColor: '#fff', 
          borderTopLeftRadius: '24px', 
          borderTopRightRadius: '24px',
          padding: '24px 20px',
          zIndex: 20,
          boxShadow: '0 -4px 20px rgba(0,0,0,0.1)'
        }}>
          <div style={{ width: '40px', height: '4px', backgroundColor: '#e2e8f0', borderRadius: '2px', margin: '0 auto 24px' }}></div>
          
          <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '24px' }}>Add New Item</h3>

          <div className="mb-4">
            <label style={{ fontSize: '12px', color: 'var(--text-gray)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>What are we buying?</label>
            <input 
              type="text" 
              placeholder="e.g. Greek Yogurt" 
              className="input-field" 
              style={{ backgroundColor: '#f8fafc', border: 'none', paddingLeft: '16px' }}
            />
          </div>

          <div className="flex gap-4 mb-6">
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '12px', color: 'var(--text-gray)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>Quantity</label>
              <div className="flex items-center justify-between" style={{ backgroundColor: '#f8fafc', borderRadius: '12px', padding: '8px 12px' }}>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--primary-green)' }}>
                  <Minus size={20} />
                </button>
                <span style={{ fontWeight: '600', fontSize: '16px' }}>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--primary-green)' }}>
                  <Plus size={20} />
                </button>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '12px', color: 'var(--text-gray)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>Unit</label>
              <select className="input-field" style={{ backgroundColor: '#f8fafc', border: 'none', paddingLeft: '16px', appearance: 'none' }}>
                <option>Gallon</option>
                <option>Pieces</option>
                <option>Pound</option>
                <option>Ounce</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6" style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
            <div className="flex items-center gap-3">
              <Bell size={20} color="var(--primary-green)" />
              <span style={{ fontWeight: '500', fontSize: '14px' }}>Mark as Urgent</span>
            </div>
            
            {/* Custom Toggle Switch */}
            <div 
              onClick={() => setIsUrgent(!isUrgent)}
              style={{ 
                width: '44px', height: '24px', 
                backgroundColor: isUrgent ? 'var(--primary-green)' : '#cbd5e1', 
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
                left: isUrgent ? '22px' : '2px', 
                transition: 'left 0.2s',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}></div>
            </div>
          </div>

          <button className="btn btn-primary" style={{ width: '100%' }}>
            <Plus size={20} style={{ marginRight: '8px' }} />
            Add to List
          </button>
        </div>
      </main>
      <BottomNav activeTab="list" />
    </>
  );
};

export default GroceryList;
