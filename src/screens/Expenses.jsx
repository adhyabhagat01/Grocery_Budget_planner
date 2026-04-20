import React from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { ChevronLeft, ChevronRight, Plus, MapPin, Coffee, Utensils, Download } from 'lucide-react';

const Expenses = () => {
  const transactions = [
    { id: 1, store: 'DMart', category: 'Groceries', date: 'May 12', amount: 45.20, status: 'UNDER', icon: MapPin, color: '#f59e0b' },
    { id: 2, store: 'JioMart', category: 'Meat', date: 'May 10', amount: 22.00, status: 'OVER', icon: Utensils, color: '#3b82f6' },
    { id: 3, store: 'Bakery', category: 'Pastry', date: 'May 08', amount: 12.45, status: 'UNDER', icon: Coffee, color: '#10b981' }
  ];

  return (
    <>
      <Header />
      <main className="content-area" style={{ padding: '0 20px' }}>
        
        {/* Top Controls */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2" style={{ color: 'var(--primary-green)', fontWeight: '600', fontSize: '14px' }}>
            <ChevronLeft size={16} />
            May 2024
            <ChevronRight size={16} />
          </div>
          <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '14px', borderRadius: '20px' }}>
            <Plus size={16} style={{ marginRight: '4px' }} />
            Add Expense
          </button>
        </div>

        {/* Total Spend Card */}
        <div className="card mb-8">
          <div style={{ fontSize: '12px', color: 'var(--text-gray)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px' }}>Total Monthly Spend</div>
          <div className="flex items-baseline gap-2 mb-4">
            <span style={{ fontSize: '32px', fontWeight: '700', color: 'var(--text-dark)' }}>$320.00</span>
            <span style={{ fontSize: '14px', color: 'var(--text-light)' }}>/ $400.00</span>
          </div>
          
          <div style={{ height: '8px', backgroundColor: 'var(--bg-color)', borderRadius: '4px', overflow: 'hidden', marginBottom: '8px' }}>
            <div style={{ height: '100%', width: '80%', backgroundColor: 'var(--primary-green)', borderRadius: '4px' }}></div>
          </div>
          
          <div style={{ fontSize: '12px', color: 'var(--text-gray)' }}>80% of budget used</div>
        </div>

        {/* Transactions List */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Transactions</h3>
            <select style={{ backgroundColor: '#f1f5f9', border: 'none', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', color: '#475569', outline: 'none' }}>
              <option>All Categories</option>
            </select>
          </div>

          <div className="flex-col gap-3 flex">
            {transactions.map(txn => {
              const Icon = txn.icon;
              return (
                <div key={txn.id} className="card flex items-center justify-between" style={{ padding: '16px' }}>
                  <div className="flex items-center gap-3">
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: `${txn.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={20} color={txn.color} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)' }}>{txn.store}</h4>
                      <p style={{ fontSize: '12px', color: 'var(--text-gray)' }}>{txn.category} • {txn.date}</p>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: txn.status === 'OVER' ? 'var(--danger)' : 'var(--primary-green)' }}>
                      ₹{txn.amount.toFixed(2)}
                    </div>
                    <div style={{ 
                      fontSize: '10px', fontWeight: '700', 
                      color: txn.status === 'OVER' ? 'var(--danger)' : 'var(--primary-green)',
                      marginTop: '2px'
                    }}>
                      {txn.status}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </main>
      <BottomNav activeTab="expenses" />
    </>
  );
};

export default Expenses;
