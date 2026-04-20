import React from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { Search, MapPin } from 'lucide-react';

const ComparePrices = () => {
  const deals = [
    { id: 1, store: 'DMart', isBestValue: true, deliveryInfo: 'Delivery in 45m', price: 4.88, oldPrice: 6.41, subtotal: 4.88, deliveryFee: 'FREE', logoColor: '#00a651' },
    { id: 2, store: 'JioMart', isBestValue: false, deliveryInfo: 'Pickup available', price: 5.29, oldPrice: 8.44, subtotal: 5.29, deliveryFee: '0.00', logoColor: '#ef4444' },
    { id: 3, store: 'SmartStore', isBestValue: false, deliveryInfo: 'Prime Delivery', price: 6.49, oldPrice: 10.14, subtotal: 6.49, deliveryFee: '2.99', logoColor: '#3b82f6' },
    { id: 4, store: 'Amazon Fresh', isBestValue: false, deliveryInfo: 'Next day delivery', price: 5.90, oldPrice: 8.50, subtotal: 5.90, deliveryFee: '1.49', logoColor: '#0ea5e9' }
  ];

  return (
    <>
      <Header />
      <main className="content-area" style={{ padding: '0 20px' }}>
        <div className="mb-4">
          <h2 style={{ fontSize: '22px', color: 'var(--text-dark)', marginBottom: '4px' }}>Price Comparison</h2>
          <p style={{ color: 'var(--text-gray)', fontSize: '14px' }}>Smart sourcing for your intelligent pantry.</p>
        </div>

        {/* Selection Area */}
        <div className="mb-6">
          <label style={{ fontSize: '10px', color: 'var(--text-gray)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>Select Item</label>
          <select className="input-field" style={{ paddingLeft: '16px', marginBottom: '16px', fontWeight: '500' }}>
            <option>Organic Eggs</option>
            <option>Whole Milk</option>
            <option>Sourdough Bread</option>
          </select>

          <div className="flex gap-3">
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '10px', color: 'var(--text-gray)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>Quantity</label>
              <input type="number" defaultValue="1" className="input-field" style={{ paddingLeft: '16px' }} />
            </div>
            <div style={{ flex: 2, display: 'flex', alignItems: 'flex-end' }}>
              <button className="btn btn-primary" style={{ width: '100%', height: '48px' }}>
                Compare <Search size={16} style={{ marginLeft: '8px' }} />
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex-col gap-4 flex mb-8">
          {deals.map(deal => (
            <div key={deal.id} className="card relative" style={deal.isBestValue ? { border: '1px solid var(--primary-green)' } : {}}>
              
              {deal.isBestValue && (
                <div style={{ 
                  position: 'absolute', top: '-10px', left: '16px', 
                  backgroundColor: 'var(--primary-green)', color: 'white', 
                  fontSize: '10px', fontWeight: '700', padding: '4px 8px', 
                  borderRadius: '12px', textTransform: 'uppercase'
                }}>
                  Best Value
                </div>
              )}

              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3 items-center">
                  <div style={{ width: '24px', height: '24px', borderRadius: '4px', backgroundColor: deal.logoColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={14} color="white" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-dark)' }}>{deal.store}</h4>
                    <p style={{ fontSize: '12px', color: 'var(--text-gray)' }}>{deal.deliveryInfo}</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary-green)' }}>₹{deal.price.toFixed(2)}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-light)', textDecoration: 'line-through' }}>Unit: ₹{deal.oldPrice.toFixed(2)}</div>
                </div>
              </div>

              <div style={{ borderTop: '1px dashed var(--border-color)', borderBottom: '1px dashed var(--border-color)', padding: '12px 0', marginBottom: '16px' }}>
                <div className="flex justify-between mb-2">
                  <span style={{ fontSize: '12px', color: 'var(--text-gray)' }}>Subtotal</span>
                  <span style={{ fontSize: '12px', fontWeight: '500' }}>${deal.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ fontSize: '12px', color: 'var(--text-gray)' }}>Delivery Fee</span>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: deal.deliveryFee === 'FREE' ? 'var(--primary-green)' : 'inherit' }}>
                    {deal.deliveryFee === 'FREE' ? 'FREE' : `$${deal.deliveryFee}`}
                  </span>
                </div>
              </div>

              <button className={deal.isBestValue ? "btn btn-primary" : "btn btn-outline"} style={{ width: '100%', fontSize: '14px', padding: '10px' }}>
                {deal.isBestValue ? 'Select Deal' : 'Select Platform'}
              </button>
            </div>
          ))}
        </div>
      </main>
      <BottomNav activeTab="compare" />
    </>
  );
};

export default ComparePrices;
